/* eslint-disable @typescript-eslint/no-unused-vars */
import { SubscriptionPlanService } from '@bcdapps/subscription';
import { Controller } from '@nestjs/common';
import { GrpcMethod, RpcException } from '@nestjs/microservices';
import { HttpError } from 'http-json-errors';
import { inject, LazyServiceIdentifer } from 'inversify';
import { rpc, subscription_plan } from '../codegen/rpc';

import SubscriptionPlanResponse = subscription_plan.SubscriptionPlanResponse;
import SubscriptionPlanFilter = subscription_plan.SubscriptionPlanFilter;
import SubscriptionPlan = subscription_plan.SubscriptionPlan;
import DeleteSubscriptionPlanResponse = subscription_plan.DeleteSubscriptionPlanResponse;
import UpdateSubscriptionPlanResponse = subscription_plan.UpdateSubscriptionPlanResponse;
import UpdateSubscriptionPlanRequest = subscription_plan.UpdateSubscriptionPlanRequest;
import SubscriptionPlanInput = subscription_plan.SubscriptionPlanInput;
import IEmpty = rpc.IEmpty;

@Controller()
export class SubscriptionPlanController {
  constructor(
    @inject(new LazyServiceIdentifer(() => SubscriptionPlanService))
    private readonly subscriptionPlanService: SubscriptionPlanService,
  ) {}
  /**
   * Get all subscription plans
   * Test command : grpcurl -plaintext  -proto rpc/rpc.proto 127.0.0.1:5000 rpc.SubscriptionPlanService/FindAll
   * @param {IEmpty} req
   * @returns {Promise<SubscriptionPlans>}
   * @memberof SubscriptionPlanController
   */
  @GrpcMethod('SubscriptionPlanService', 'FindAll')
  async findAll(req: IEmpty): Promise<SubscriptionPlanResponse> {
    try {
      const obj = await this.subscriptionPlanService.findAll();
      return SubscriptionPlanResponse.create(
        (obj as unknown) as SubscriptionPlanResponse,
      );
    } catch (error) {
      const errorInfo = error as HttpError;
      throw new RpcException({
        code: errorInfo.statusCode,
        message: JSON.stringify(error),
      });
    }
  }

  /**
   * Get One subscription plan
   * Test command : grpcurl -d '{"id":"513-A"}' -plaintext  -proto rpc/rpc.proto 127.0.0.1:5000 rpc.SubscriptionPlanService/FindOne
   * @param {SubscriptionPlanFilter} where
   * @returns {Promise<SubscriptionPlan>}
   * @memberof SubscriptionPlanController
   */
  @GrpcMethod('SubscriptionPlanService', 'FindOne')
  async findOne(where: SubscriptionPlanFilter): Promise<SubscriptionPlan> {
    try {
      const id = where?.id;
      const obj = await this.subscriptionPlanService.findOne({ id });
      return SubscriptionPlan.create((obj as unknown) as SubscriptionPlan);
    } catch (error) {
      const errorInfo = error as HttpError;
      throw new RpcException({
        code: errorInfo.statusCode,
        message: JSON.stringify(error),
      });
    }
  }

  /**
   * Create subscription plan
   * Test command : grpcurl -d '{
      "name": "Test GRPC",
      "code": "12312",
      "description": "test",
      "price": 10,
      "invoicePeriod": 10,
      "invoiceDuration":"DAY"
    }' -plaintext  -proto rpc/rpc.proto 127.0.0.1:5000 rpc.SubscriptionPlanService/Create
   * @param {SubscriptionPlanInput} payload
   * @returns {Promise<SubscriptionPlan>}
   * @memberof SubscriptionPlanController
   */
  @GrpcMethod('SubscriptionPlanService', 'Create')
  async create(payload: SubscriptionPlanInput): Promise<SubscriptionPlan> {
    try {
      const obj = await this.subscriptionPlanService.create({
        name: payload?.name,
        price: payload?.price,
        invoice_duration: payload?.invoice_duration as any,
        invoice_period: payload?.invoice_period,
        trail_period: payload?.trail_period,
        trail_duration: payload?.trail_duration as any,
        description: payload?.description,
        code: payload?.code,
      });
      return SubscriptionPlan.create((obj as unknown) as SubscriptionPlan);
    } catch (error) {
      const errorInfo = error as HttpError;
      throw new RpcException({
        code: errorInfo.statusCode,
        message: JSON.stringify(error) || error,
      });
    }
  }

  /**
   * Update subscription plan
   * Test command :
   * grpcurl -d '{"payload":{"name":"Update Text"},"where":{"id":"97-A"}}'
   * -plaintext  -proto rpc/rpc.proto 127.0.0.1:5000 rpc.SubscriptionPlanService/Update
   * @param {UpdateSubscriptionPlanRequest} data
   * @returns {Promise<UpdateSubscriptionPlanResponse>}
   * @memberof SubscriptionPlanController
   */
  @GrpcMethod('SubscriptionPlanService', 'Update')
  async update(
    data: UpdateSubscriptionPlanRequest,
  ): Promise<UpdateSubscriptionPlanResponse> {
    try {
      const { payload, where } = data;
      const obj = await this.subscriptionPlanService.update(
        payload as any,
        where,
      );
      return UpdateSubscriptionPlanResponse.create(
        (obj as unknown) as UpdateSubscriptionPlanResponse,
      );
    } catch (error) {
      const errorInfo = error as HttpError;
      throw new RpcException({
        code: errorInfo.statusCode,
        message: JSON.stringify(error),
      });
    }
  }

  /**
   * Delete subscription plan
   * Test command : grpcurl -d '{"id":"513-A"}' -plaintext  -proto rpc/rpc.proto 127.0.0.1:5000 rpc.SubscriptionPlanService/Delete
   * @param {SubscriptionPlanFilter} where
   * @returns {Promise<DeleteSubscriptionPlanResponse>}
   * @memberof SubscriptionPlanController
   */
  @GrpcMethod('SubscriptionPlanService', 'Delete')
  async delete(
    where: SubscriptionPlanFilter,
  ): Promise<DeleteSubscriptionPlanResponse> {
    try {
      const id = where?.id;
      const obj = await this.subscriptionPlanService.delete({ id });
      return DeleteSubscriptionPlanResponse.create(
        (obj as unknown) as DeleteSubscriptionPlanResponse,
      );
    } catch (error) {
      const errorInfo = error as HttpError;
      throw new RpcException({
        code: errorInfo.statusCode,
        message: JSON.stringify(error),
      });
    }
  }
}
