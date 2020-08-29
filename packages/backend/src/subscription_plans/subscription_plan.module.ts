import { Module } from '@nestjs/common';

import { SubscriptionPlanController } from './service_plan.controller';

@Module({
  controllers: [SubscriptionPlanController],
  exports: [],
})
export class SubscriptionPlanModule {}
