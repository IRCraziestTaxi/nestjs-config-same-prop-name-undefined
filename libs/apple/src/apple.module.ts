import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppleService } from './apple.service';
import { appleConfig } from './config';

@Module({
  imports: [ConfigModule.forFeature(appleConfig)],
  providers: [AppleService],
  exports: [AppleService],
})
export class AppleModule {}
