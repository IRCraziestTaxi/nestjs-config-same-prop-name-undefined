import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppleConfig } from './config';

@Injectable()
export class AppleService {
  public constructor(
    private readonly configService: ConfigService<AppleConfig>,
  ) {}

  public doAppleThing(): void {
    const apiUrl = this.configService.get('apiUrl');
    console.log(apiUrl);
  }
}
