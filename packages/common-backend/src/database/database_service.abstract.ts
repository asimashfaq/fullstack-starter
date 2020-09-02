/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * Base Repository to implement database service
 * Add any database by implementing IDatabaseRepo
 * @export
 * @abstract
 * @class IDatabaseRepo
 */
export abstract class IDatabaseRepo {
  /**
   * Return Database connection instance
   *
   * @returns {Promise<any>}
   * @memberof IDatabaseRepo
   */
  connectDB(): Promise<any> {
    throw new Error('Method not implemented.');
  }
  /**
   * Insert / Create Record
   *
   * @template T Model
   * @template P Type for creating record
   * @param {P} payload
   * @returns {Promise<T>}
   * @memberof IDatabaseRepo
   */
  create<T, P>(payload: P): Promise<T> {
    throw new Error('Method not implemented.');
  }
  /**
   * Find One Record
   *
   * @template T Model
   * @template F Type of Filter data
   * @param {F} where
   * @returns {Promise<T>}
   * @memberof IDatabaseRepo
   */
  findOne<T, F>(where: F): Promise<T> {
    throw new Error('Method not implemented.');
  }
  /**
   * Find All Record
   *
   * @template T Model
   * @template F Type of Filter data
   * @template F
   * @param {F} [where]
   * @param {number} [limit]
   * @param {number} [skip]
   * @returns {Promise<T[]>}
   * @memberof IDatabaseRepo
   */
  findAll<T, F>(
    where?: F,
    limit?: number,
    skip?: number,
  ): Promise<[T[], number]> {
    throw new Error('Method not implemented.');
  }
  /**
   * Count the record
   *
   * @template F Type of Filter data
   * @param {F} [where]
   * @returns {Promise<number>}
   * @memberof IDatabaseRepo
   */
  count<F>(where?: F): Promise<number> {
    throw new Error('Method not implemented.');
  }
  /**
   * Update Record
   *
   * @template F Type of Filter data
   * @template U Type of Update payload
   * @template T Model
   * @param {U} payload
   * @param {F} where
   * @returns {Promise<T[]>}
   * @memberof IDatabaseRepo
   */
  update<F, U, T>(payload: U, where: F): Promise<[T[], number]> {
    throw new Error('Method not implemented.');
  }

  /**
   * Delete Record
   *
   * @template T Model
   * @template F Type of Filter data
   * @param {F} where
   * @returns {(Promise<[T | T[], number]>)}
   * @memberof IDatabaseRepo
   */
  delete<T, F>(where: F): Promise<[T[], number]> {
    throw new Error('Method not implemented.');
  }
}
