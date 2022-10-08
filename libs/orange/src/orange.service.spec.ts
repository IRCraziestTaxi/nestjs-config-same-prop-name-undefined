import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { orangeConfig } from './config';
import { OrangeService } from './orange.service';

describe('OrangeService', () => {
  let service: OrangeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forFeature(orangeConfig)],
      providers: [OrangeService],
    }).compile();

    service = module.get<OrangeService>(OrangeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
