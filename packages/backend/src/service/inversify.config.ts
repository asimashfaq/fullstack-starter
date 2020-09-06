/* eslint-disable @typescript-eslint/tslint/config */
import { configBinding, ServiceSymbol } from '@bcdapps/common-backend';
import { bindingsSubscription } from '@bcdapps/subscription';
import { Container, ContainerModule, interfaces } from 'inversify';
import _ from 'lodash';
import 'reflect-metadata';
import { ServicesApp } from './services.app';

const bindings = new ContainerModule((bind: interfaces.Bind) => {
  _.each([], (Service: any) => {
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
container.load(configBinding);
container.load(bindings);
container.load(bindingsSubscription);
export const servicesContainer = container;
