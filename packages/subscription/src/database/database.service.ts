/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/unbound-method */
import {
  createEverLogger,
  env,
  IDatabaseRepo,
  IService,
} from '@bcdapps/common-backend';
import fs from 'fs';
import { injectable } from 'inversify';
import _ from 'lodash';
import { join } from 'path';
import { DocumentStore, IDocumentSession } from 'ravendb';
import { SubscriptionPlans } from '../model/subscription_plan.model';

/**
 * Implementation Service for Crud
 * Database Implemented: RavenDB
 * You can implement any underlying database in this  REPO
 * @export
 * @class DatabaseService
 * @implements {IService}
 * @implements {IDatabaseRepo}
 */
@injectable()
export class DatabaseService implements IService, IDatabaseRepo {
  // @ts-ignore
  protected db: IDocumentSession;
  private log = createEverLogger({ name: 'main' });
  constructor() {
    // #TODO : Should not assign here
    // void this.connectDB();
  }
  /**
   * Create record in database
   *
   * @template T Model
   * @template P Type of Input Object
   * @param {P} payload
   * @returns {Promise<T>}
   * @memberof DatabaseService
   */
  async create<T, P>(payload: P | any): Promise<T> {
    await this.connectDB();
    await this.db.store(payload);
    await this.db.saveChanges();
    return (payload as unknown) as T;
  }
  /**
   * Get single record from database
   *
   * @template T Model
   * @template F Type of Filter Object
   * @param {(F | any)} where
   * @returns {Promise<T>}
   * @memberof DatabaseService
   */
  async findOne<T, F>(where: F | any): Promise<T> {
    await this.connectDB();
    const collectionName: string = where?.collection_name;
    delete where?.collection_name;
    if (!_.isEmpty(where)) {
      const id: string = where?.id;
      if (!_.isNil(id)) {
        return (this.db.load(`${collectionName}/${id}`) as unknown) as Promise<
          T
        >;
      }
      const slug = where?.slug;
      const result = await this.db
        .query(`${collectionName}/index/slug`)
        .whereEquals('slug', slug)
        .all();

      return result && ((result[0] as unknown) as Promise<T>);
    }
    throw new Error('Method not implemented.');
  }
  /**
   * Get Records from database
   *
   * @template T Model
   * @template F
   * @param {(F | any)} [where]
   * @param {number} [limit]
   * @param {number} [skip]
   * @returns {Promise<[T[], number]>}
   * @memberof DatabaseService
   */
  async findAll<T, F>(
    where?: F | any,
    limit?: number,
    skip?: number,
  ): Promise<[T[], number]> {
    await this.connectDB();
    const collectionName: string = where?.collection_name;
    delete where?.collection_name;
    if (_.omit(where, _.isUndefined as any)) {
      return [
        ((await this.db.advanced.loadStartingWith(`${collectionName}/`, {
          start: skip,
          pageSize: limit,
        })) as unknown) as T[],
        await this.db.query({ collection: collectionName }).count(),
      ];
    }
    throw new Error('Method not implemented.');
  }
  count<F>(where?: F): Promise<number> {
    throw new Error('Method not implemented.');
  }
  /**
   * Update record in database
   *
   * @template T Model
   * @template U Type of Update Object
   * @template F Type of Filter Object
   * @param {U} payload
   * @param {(F | any)} where
   * @returns {Promise<[T[], number]>}
   * @memberof DatabaseService
   */
  async update<T, U, F>(payload: U, where: F | any): Promise<[T[], number]> {
    const collectionName: string = where?.collection_name;
    delete where?.collection_name;
    if (!_.isEmpty(where)) {
      await this.connectDB();
      const id: string = where?.id;
      // TODO: Improve the logic for this
      // multiple records
      // Id is unique it cannot have multiple objects
      const edges = await this.db.load(`${collectionName}/${id}`);
      Object.assign(edges, payload);
      void this.db.saveChanges();
      return [[edges as any], 1];
    }

    throw new Error('Method not implemented.');
  }

  /**
   * Remove record from database
   *
   * @template T Model
   * @template F Type of Filter Object
   * @param {(F | any)} where
   * @returns {Promise<[T[], number]>}
   * @memberof DatabaseService
   */
  async delete<T, F>(where: F | any): Promise<[T[], number]> {
    const collectionName: string = where?.collection_name;
    delete where?.collection_name;
    if (!_.isEmpty(where)) {
      await this.connectDB();
      const id: string = where?.id;
      // TODO: Improve the logic for this
      // Should return the delete objects with count
      // Id is unique it cannot have multiple objects
      const edges = await this.db.load(`${collectionName}/${id}`);
      void this.db.delete(edges);
      void this.db.saveChanges();
      return [[edges as any], 1];
    }

    throw new Error('Method not implemented.');
  }
  /**
   * Initialize DB connection
   *
   * @returns {Promise<IDocumentSession>}
   * @memberof DatabaseService
   */
  async connectDB(): Promise<IDocumentSession | null> {
    try {
      if (this.db) {
        this.log.info('Return Existing Session');
        return (this.db as unknown) as any;
      }
      this.log.info('Trying to connect to database');
      this.log.info(
        `DB certs: ${
          (process.cwd(), join(process.cwd() + '../../../', env.DB_CERTS))
        }`,
      );
      const authOptions = {
        certificate: fs.readFileSync(
          join(process.cwd() + '../../../', env.DB_CERTS),
        ),
        type: 'pfx',
      };
      const store = new DocumentStore(
        env.DB_URI,
        env.DB_NAME,
        authOptions as any,
      );
      store.conventions.findCollectionNameForObjectLiteral = (entity: any) =>
        entity?.collection;
      store.conventions.registerEntityType(SubscriptionPlans);
      store.initialize();
      this.db = store.openSession();
      return (this.db as unknown) as any;
    } catch (err) {
      this.log.error(err, 'Sever initialization failed! Cannot connect to DB');
    }
    return null;
  }
}
