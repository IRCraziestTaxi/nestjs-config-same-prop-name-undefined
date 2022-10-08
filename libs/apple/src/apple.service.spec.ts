import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { AppleService } from './apple.service';
import { appleConfig } from './config';

describe('AppleService', () => {
  let service: AppleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forFeature(appleConfig)],
      providers: [AppleService],
    }).compile();

    service = module.get<AppleService>(AppleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
