/* eslint-disable complexity */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BadRequestError,
  ConflictError,
  createEverLogger,
  ErrorGenerator,
  IService,
  NotFoundError,
  ParseError,
} from '@bcdapps/common_backend';
import { injectable } from 'inversify';
import _ from 'lodash';
import { DatabaseService } from './database/database.service';
import { servicesContainer } from './inversify.config';
import { SubscriptionPlans } from './model/subscription_plan.model';
import {
  DeleteSubscriptionPlanResponse,
  ISubscriptionPlanService,
  SubscriptionInputPayload,
  SubscriptionPlan,
  SubscriptionPlanFilter,
  SubscriptionPlanResponse,
  SubscriptionPlanUpdatePayload,
  UpdateSubscriptionPlanResponse,
} from './types/subscription_plan.types';
import { subscriptionPlanCreateSchema } from './validators/subscription_plan.create.yup';
import { subscriptionPlanFilterSchema } from './validators/subscription_plan.filter.yup';
import { subscriptionPlanUpdateSchema } from './validators/subscription_plan.update.yup';

/**
 * Subscription Plans Service
 * CRUD operation for Subscription Plan
 * @export
 * @class SubscriptionPlanService
 * @implements {ISubscriptionPlanService}
 * @implements {IService}
 */
@injectable()
export class SubscriptionPlanService
  implements ISubscriptionPlanService, IService {
  private logger = createEverLogger({ name: 'SubscriptionPlanService' });
  private dbService = servicesContainer.get<DatabaseService>(DatabaseService);
  /**
   * Create the subscription plan
   *
   * Returns the newly created subscription plan object with id
   *
   * @param {SubscriptionInputPayload} payload
   * @returns {Promise<SubscriptionPlan>}
   * @memberof SubscriptionPlanService
   */
  async create(payload: SubscriptionInputPayload): Promise<SubscriptionPlan> {
    let result: SubscriptionPlan = {} as SubscriptionPlan;
    try {
      // Validate the payload
      await subscriptionPlanCreateSchema.validate(payload, {
        abortEarly: false,
      });
      const slug = payload.name.toLowerCase().replace(' ', '-');

      // Check for existing slug
      const isExist = await this.dbService.findOne<
        SubscriptionPlan,
        SubscriptionPlanFilter
      >({ slug });
      if (!_.isNil(isExist)) {
        throw ConflictError(ErrorGenerator.Duplicate('Subscription Plan'));
      }
      // Make db call
      result = await this.dbService.create<SubscriptionPlan, SubscriptionPlans>(
        new SubscriptionPlans({ ...payload, slug }),
      );
      this.logger.debug('Subscription Plan added Successfully', result);
    } catch (e) {
      this.logger.error(e);
      ParseError(e, ErrorGenerator.Duplicate('Subscription Plan'));
    }
    if (!_.isEmpty(result?.id)) {
      return result;
    }
    throw BadRequestError(ErrorGenerator.UnableSave('Subscription Plan'));
  }
  /**
   * Get the subscription plan by id only
   * will return single object
   * @param {SubscriptionPlanFilter} where
   * @returns {Promise<SubscriptionPlan>}
   * @memberof SubscriptionPlanService
   */
  async findOne(where: SubscriptionPlanFilter): Promise<SubscriptionPlan> {
    let edge: SubscriptionPlan = {} as SubscriptionPlan;
    try {
      // Validate Input
      await subscriptionPlanFilterSchema.validate(where, {
        abortEarly: false,
      });
      // Get the subscription plan id
      // TODO: Implement other filters
      const id = where?.id;
      if (!_.isNil(id)) {
        // make db call
        edge = await this.dbService.findOne<
          SubscriptionPlan,
          SubscriptionPlanFilter
        >(new SubscriptionPlans({ id }));
      }
    } catch (e) {
      this.logger.error(e);
      ParseError(e, ErrorGenerator.NotFound('Subscription Plan'));
    }
    if (!_.isEmpty(edge)) {
      this.logger.debug('Subscription Plan loaded Successfully', edge);

      return edge;
    }
    throw NotFoundError(ErrorGenerator.NotFound('Subscription Plan'));
  }
  /**
   * Get all the subscriptions plans
   * with pagination
   * @param {SubscriptionPlanFilter} [where]
   * @returns {Promise<SubscriptionPlanResponse>}
   * @memberof SubscriptionPlanService
   */
  async findAll(
    where?: SubscriptionPlanFilter,
  ): Promise<SubscriptionPlanResponse> {
    // Validate the Input

    let edges: SubscriptionPlan[] = [] as SubscriptionPlan[];
    let count: number = 0; // Rows counts
    let recordLimit = 10; // Pagination Limit
    let recordSkip = 0; // Pagination: SKIP

    // TODO
    // Transform from Object to Array
    // { id: SortDirection.ASC } to [ "id", "ASC"]
    // for (const [key, value] of Object.entries(sortBy)) {
    //   sortOrder.push([key, value]);
    // }
    try {
      await subscriptionPlanFilterSchema.validate(where, {
        abortEarly: false,
      });
      if (where) {
        // TODO: Implement other filters
        const { id, limit, skip } = where;
        // isNil check for for null or undefined
        if (!_.isNil(id) && !_.isNil(limit) && !_.isNil(skip)) {
          // Set Limit and Skip for `page_info`
          recordLimit = limit as number;
          recordSkip = skip as number;
          // Load the SubscriptionPlan with ID and Pagination
          [edges, count] = await this.dbService.findAll<
            SubscriptionPlan,
            Partial<SubscriptionPlanFilter>
          >(new SubscriptionPlans({ id }), recordLimit, recordSkip);
        } else if (!_.isNil(limit) && !_.isNil(skip)) {
          // Set Limit and Skip for `page_info`
          recordLimit = limit as number;
          recordSkip = skip as number;
          // Load All SubscriptionPlan with default pagination
          [edges, count] = await this.dbService.findAll<
            SubscriptionPlan,
            Partial<SubscriptionPlanFilter>
          >(new SubscriptionPlans(), recordLimit, recordSkip);
        } else if (!_.isNil(id)) {
          // Load All SubscriptionPlan with id with default pagination
          [edges, count] = await this.dbService.findAll<
            SubscriptionPlan,
            Partial<SubscriptionPlanFilter>
          >(new SubscriptionPlans({ id }), recordLimit, recordSkip);
        }
      } else {
        // Load All SubscriptionPlan with default pagination
        [edges, count] = await this.dbService.findAll<
          SubscriptionPlan,
          Partial<SubscriptionPlanFilter>
        >(new SubscriptionPlans(), recordLimit, recordSkip);
      }
    } catch (error) {
      this.logger.error(error);
      // Empty
      ParseError(error, ErrorGenerator.NotFound('Subscription Plan'));
    }
    // Validate edges are not empty
    if (!_.isEmpty(edges)) {
      this.logger.debug('Subscription Plan loaded Successfully', edges);

      return {
        edges,
        page_info: {
          total: count,
          limit: recordLimit,
          skip: recordSkip,
          has_more: count > recordLimit + recordSkip ? true : false,
        },
      };
    }
    throw NotFoundError(ErrorGenerator.NotFound('Subscription Plan'));
  }
  count(where?: SubscriptionPlanFilter): Promise<number> {
    throw new Error('Method not implemented.');
  }
  /**
   * Update the subscription plan
   * by id only
   * @param {SubscriptionPlanUpdatePayload} payload
   * @param {SubscriptionPlanFilter} where
   * @returns {Promise<UpdateSubscriptionPlanResponse>}
   * @memberof SubscriptionPlanService
   */
  async update(
    payload: SubscriptionPlanUpdatePayload,
    where: SubscriptionPlanFilter,
  ): Promise<UpdateSubscriptionPlanResponse> {
    let modified: number = 0;
    let edges: SubscriptionPlan[] = [] as SubscriptionPlan[];

    try {
      // Validate the input
      await subscriptionPlanUpdateSchema.validate(
        { ...payload, ...where },
        { abortEarly: false },
      );
      // Check where is defined
      if (where) {
        const { id } = where;
        // Get Subscription plan id
        if (!_.isNil(id)) {
          // Generate the slug
          const slug =
            payload.name && payload.name.toLowerCase().replace(' ', '-');
          // Check for existing slug
          const isExist = await this.dbService.findOne<
            SubscriptionPlan,
            SubscriptionPlanFilter
          >({ slug });
          // Validate the ID is not same
          // Return document can have the same ID as of update
          if (!_.isNil(isExist) && isExist?.id != id) {
            throw ConflictError(ErrorGenerator.Duplicate('Subscription Plan'));
          }
          // Make db call
          [edges, modified] = await this.dbService.update<
            SubscriptionPlan,
            Partial<SubscriptionPlan>,
            SubscriptionPlanFilter
          >(
            new SubscriptionPlans({ ...payload, slug }),
            new SubscriptionPlans({ id }),
          );
          this.logger.debug('Subscription Plan Update Successfully', edges);
        }
      }
    } catch (e) {
      this.logger.error(e);
      ParseError(e, ErrorGenerator.Duplicate('Subscription Plan'));
    }
    if (modified > 0) {
      // Return the update data with count
      return { modified, edges };
    }
    throw NotFoundError(ErrorGenerator.NotFound('Subscription Plan'));
  }
  /**
   * Delete the subscription plan
   * by id only
   * @param {SubscriptionPlanFilter} where
   * @returns {Promise<DeleteSubscriptionPlanResponse>}
   * @memberof SubscriptionPlanService
   */
  async delete(
    where: SubscriptionPlanFilter,
  ): Promise<DeleteSubscriptionPlanResponse> {
    let modified: number = 0;
    let edges: SubscriptionPlan[] = [] as SubscriptionPlan[];

    try {
      this.logger.info(where, 'Delete request');
      // Validate the payload
      await subscriptionPlanFilterSchema.validate(where, { abortEarly: false });
      // Check where is defined
      if (where) {
        // Get the subscription plan id
        const { id } = where;
        if (!_.isNil(id)) {
          // Make db call
          [edges, modified] = await this.dbService.delete<
            SubscriptionPlan,
            SubscriptionPlanFilter
          >(new SubscriptionPlans({ id }));
          this.logger.debug('Subscription Plan deleted Successfully', edges);
        }
      }
    } catch (e) {
      this.logger.error(e);
      ParseError(e, ErrorGenerator.UnableToDelete('Subscription Plan'));
    }
    if (modified > 0) {
      return { modified, edges };
    }
    throw NotFoundError(ErrorGenerator.NotFound('Subscription Plan'));
  }
}
