/* eslint-disable @typescript-eslint/tslint/config */
import { ContainerModule, interfaces } from 'inversify';
import _ from 'lodash';
import 'reflect-metadata';
import { ConfigService } from './config/config.service';
import { ServiceSymbol } from './IService';

export const configBinding = new ContainerModule((bind: interfaces.Bind) => {
  _.each([ConfigService], (Service: any) => {
    bind(Service)
      .to(Service)
      .inSingletonScope();

    bind<any>(ServiceSymbol).toFactory<any>(context =>
      context.container.get<any>(Service),
    );
  });
});
