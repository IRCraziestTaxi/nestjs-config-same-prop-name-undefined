import { AppleModule } from '@app/apple';
import { OrangeModule } from '@app/orange';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot(), AppleModule, OrangeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
