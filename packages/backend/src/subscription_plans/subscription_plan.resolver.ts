import { SubscriptionPlanService } from '@bcdapps/subscription';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { inject, LazyServiceIdentifer } from 'inversify';
import {
  DeleteSubscriptionPlanResponse,
  SubscriptionPlan,
  SubscriptionPlanFilter,
  SubscriptionPlanInput,
  SubscriptionPlanResponse,
  UpdateSubscriptionPlanResponse,
} from '../graphql.schema';

@Resolver('SubscriptionPlan')
export class SubscriptionPlanResolver {
  constructor(
    @inject(new LazyServiceIdentifer(() => SubscriptionPlanService))
    private readonly subscriptionPlanService: SubscriptionPlanService,
  ) {}
  @Query('find_all_subscription_plans')
  async find_all_subscription_plans(): Promise<SubscriptionPlanResponse> {
    try {
      const obj = await this.subscriptionPlanService.findAll();
      return (obj as unknown) as SubscriptionPlanResponse;
    } catch (error) {
      return error;
    }
  }
  @Query('find_one_subscription_plan')
  async find_one_subscription_plan(
    @Args('where') where?: SubscriptionPlanFilter,
  ): Promise<SubscriptionPlan> {
    try {
      const id = where?.id;
      const obj = await this.subscriptionPlanService.findOne({ id });
      return (obj as unknown) as SubscriptionPlan;
    } catch (error) {
      return error;
    }
  }
  @Mutation('createSubscriptionPlan')
  async createSubscriptionPlan(
    @Args('payload') payload: SubscriptionPlanInput,
  ): Promise<SubscriptionPlan> {
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
      return (obj as unknown) as SubscriptionPlan;
    } catch (error) {
      return error;
    }
  }
  @Mutation('updateSubscriptionPlan')
  async updateSubscriptionPlan(
    @Args('payload') payload: SubscriptionPlanInput,
    @Args('where') where?: SubscriptionPlanFilter,
  ): Promise<UpdateSubscriptionPlanResponse> {
    try {
      const obj = await this.subscriptionPlanService.update(payload, where);
      return (obj as unknown) as UpdateSubscriptionPlanResponse;
    } catch (error) {
      return error;
    }
  }
  @Mutation('DeleteSubscriptionPlanResponse')
  async DeleteSubscriptionPlanResponse(
    @Args('where') where?: SubscriptionPlanFilter,
  ): Promise<DeleteSubscriptionPlanResponse> {
    try {
      const id = where?.id;
      const obj = await this.subscriptionPlanService.delete({ id });
      return (obj as unknown) as DeleteSubscriptionPlanResponse;
    } catch (error) {
      return error;
    }
  }
}
