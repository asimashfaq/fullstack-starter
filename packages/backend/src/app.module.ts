import { ConfigService } from '@bcdapps/common-backend';
import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';
import _ from 'lodash';
import { join } from 'path';
import { ConfigModule } from './config/config.module';
import { ServicesModule } from './service/service.module';
import { HttpExceptionFilter } from './shared/exception-filter/http-exception.filter';
import { TimeoutInterceptor } from './shared/interceptor/timeout.interceptor';
import { SubscriptionPlanModule } from './subscription_plans/subscription_plan.module';
@Module({
  imports: [
    ConfigModule,
    ServicesModule,
    SubscriptionPlanModule,
    GraphQLModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        include: [],
        typePaths: [join(process.cwd(), 'packages/backend/src/**/*.graphql')],
        installSubscriptionHandlers: true,
        context: ({ raw }) => ({ raw }),
        introspection: true,
        debug: configService.get('NODE_ENV') === 'development',
        resolverValidationOptions: {
          requireResolversForResolveType: false,
        },
        resolvers: {
          JSON: GraphQLJSON,
          JSONObject: GraphQLJSONObject,
        },
        formatError: error => {
          try {
            error.message = JSON.parse(error.message);
          } catch (e) {
            // Empty
          }
          return {
            ...error,
            message: error.message,
            code: _.get(error, 'extensions.exception.title', 'UNKNOWN'),
            locations: error.locations,
            path: error.path,
          };
        },
        formatResponse: response => response,
      }),
      inject: [ConfigService],
    }),
  ],

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
