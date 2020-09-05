import { ConfigService } from '@bcdapps/common-backend';
import { Module } from '@nestjs/common';

@Module({
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService(),
    },
  ],
  exports: [ConfigService],
})
export class ConfigModule {}
