import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OrangeConfig } from './config';

@Injectable()
export class OrangeService {
  public constructor(
    private readonly configService: ConfigService<OrangeConfig>,
  ) {}

  public doOrangeThing(): void {
    const apiUrl = this.configService.get('apiUrl');
    console.log(apiUrl);
  }
}
