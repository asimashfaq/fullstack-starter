import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { ServicesModule } from 'service/service.module';
import { SubscriptionPlanModule } from 'subscription_plans/subscription_plan.module';
import { ConfigModule } from './config/config.module';
import { HttpExceptionFilter } from './shared/exception-filter/http-exception.filter';
import { TimeoutInterceptor } from './shared/interceptor/timeout.interceptor';

@Module({
  imports: [ConfigModule, ServicesModule, SubscriptionPlanModule],

  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: TimeoutInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
