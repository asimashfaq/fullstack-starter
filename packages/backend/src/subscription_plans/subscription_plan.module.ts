import { Module } from '@nestjs/common';
import { SubscriptionPlanController } from './subscription_plan.controller';
import { SubscriptionPlanResolver } from './subscription_plan.resolver';

@Module({
  controllers: [SubscriptionPlanController],
  providers: [SubscriptionPlanResolver],
  exports: [],
})
export class SubscriptionPlanModule {}
