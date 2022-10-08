import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { orangeConfig } from './config';
import { OrangeService } from './orange.service';

@Module({
  imports: [ConfigModule.forFeature(orangeConfig)],
  providers: [OrangeService],
  exports: [OrangeService],
})
export class OrangeModule {}
