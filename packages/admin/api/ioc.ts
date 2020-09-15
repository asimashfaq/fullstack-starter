import { Container } from 'inversify';
import { SubscriptionPlan } from './protos/rpc/subscription_plan_pb';
import {
  IProvider,
  SubscriptionPlanProvider,
} from './subscription_plans/index';

export const container = new Container();
container
  .bind<IProvider<SubscriptionPlan>>('subscriptionPlanProvider')
  .to(SubscriptionPlanProvider);
