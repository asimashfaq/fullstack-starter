/* eslint-disable @typescript-eslint/tslint/config */
import { configBinding, ServiceSymbol } from '@bcdapps/common-backend';
import { Container, ContainerModule, interfaces } from 'inversify';
import _ from 'lodash';
import 'reflect-metadata';
import { DatabaseService } from './database/database.service';
import { ServicesApp } from './services.app';
import { SubscriptionPlanService } from './subscription_plan.service';

export const bindingsSubscription = new ContainerModule(
  (bind: interfaces.Bind) => {
    _.each([DatabaseService, SubscriptionPlanService], (Service: any) => {
      bind(Service)
        .to(Service)
        .inSingletonScope();

      bind<any>(ServiceSymbol).toFactory<any>(context =>
        context.container.get<any>(Service)
      );
    });
    bind<ServicesApp>(ServicesApp)
      .toSelf()
      .inSingletonScope();
  }
);

const container = new Container();
container.load(configBinding);
container.load(bindingsSubscription);

export const servicesContainer = container;
