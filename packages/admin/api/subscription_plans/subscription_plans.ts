import * as grpcWeb from 'grpc-web';
import { injectable } from 'inversify';
import { SubscriptionPlanServiceClient } from '../protos/rpc/RpcServiceClientPb';
import { Empty } from '../protos/rpc/rpc_pb';
import {
  SubscriptionPlan,
  SubscriptionPlanResponse,
} from '../protos/rpc/subscription_plan_pb';

export interface IProvider<T> {
  findAll(): Promise<T[]>;
}

@injectable()
export class SubscriptionPlanProvider implements IProvider<SubscriptionPlan> {
  constructor() {
    console.log('SubscriptionPlanProvider is initialized');
  }
  async findAll(): Promise<SubscriptionPlan[] | any> {
    try {
      const e = new Empty();
      const a = new SubscriptionPlanServiceClient(
        'http://localhost:8081',
        null,
        null
      );
      return new Promise((resolve, reject) => {
        a.findAll(
          e,
          null,
          (err: grpcWeb.Error, response: SubscriptionPlanResponse) => {
            if (!err) {
              return resolve(response.getEdgesList().map((e) => e.toObject()));
            }
            reject(err.message);
          }
        );
      });
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
