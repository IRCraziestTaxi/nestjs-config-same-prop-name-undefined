import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('apple')
  doAppleThing(): void {
    this.appService.doAppleThing();
  }

  @Get('orange')
  doOrangeThing(): void {
    this.appService.doOrangeThing();
  }
}
