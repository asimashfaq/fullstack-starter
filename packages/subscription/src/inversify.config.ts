/* eslint-disable @typescript-eslint/tslint/config */
import { ServiceSymbol } from '@bcdapps/common_backend';
import { Container, ContainerModule, interfaces } from 'inversify';
import _ from 'lodash';
import 'reflect-metadata';
import { DatabaseService } from './database/database.service';
import { ServicesApp } from './services.app';
import { SubscriptionPlanService } from './subscription_plan.service';

const bindings = new ContainerModule((bind: interfaces.Bind) => {
  _.each([DatabaseService, SubscriptionPlanService], (Service: any) => {
    bind(Service)
      .to(Service)
      .inSingletonScope();

    bind<any>(ServiceSymbol).toFactory<any>(context =>
      context.container.get<any>(Service),
    );
  });
  bind<ServicesApp>(ServicesApp)
    .toSelf()
    .inSingletonScope();
});

const container = new Container();

container.load(bindings);

export const servicesContainer = container;
