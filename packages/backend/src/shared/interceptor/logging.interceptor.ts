import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { createEverLogger } from '../../helpers/Log';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor() {
    // Empty
  }
  private logger = createEverLogger({ name: 'LoggingInterceptor' });

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    this.logger.info('Before...');

    const now = Date.now();
    return next
      .handle()
      .pipe(tap(() => this.logger.info(`After... ${Date.now() - now}ms`)));
  }
}
