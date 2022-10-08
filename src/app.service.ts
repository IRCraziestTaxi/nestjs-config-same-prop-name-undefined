import { AppleService } from '@app/apple';
import { OrangeService } from '@app/orange';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public constructor(
    private readonly appleService: AppleService,
    private readonly orangeService: OrangeService,
  ) {}

  public doAppleThing(): void {
    this.appleService.doAppleThing();
  }

  public doOrangeThing(): void {
    this.orangeService.doOrangeThing();
  }
}
