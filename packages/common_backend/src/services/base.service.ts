import {
  IChangeResponseInfo,
  IResponseInfo,
} from '../interfaces/common.interfaces';

/**
 * Base Service for the CRUD operations
 *
 * @export
 * @interface IBaseService
 * @template T Model
 * @template P Type to accept for creating record
 * @template F Type to accept for filter
 * @template U Type to accept for update
 */
export interface IBaseService<T, P, F, U> {
  create(payload: P): Promise<T>;
  findOne(where: F): Promise<T>;
  findAll(where?: F): Promise<IResponseInfo<T>>;
  count(where?: F): Promise<number>;
  update(payload: U, where: F): Promise<IChangeResponseInfo<T>>;
  delete(where: F): Promise<IChangeResponseInfo<T>>;
}
