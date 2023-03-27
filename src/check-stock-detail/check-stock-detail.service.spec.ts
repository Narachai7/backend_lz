import { Test, TestingModule } from '@nestjs/testing';
import { CheckStockDetailService } from './check-stock-detail.service';

describe('CheckStockDetailService', () => {
  let service: CheckStockDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheckStockDetailService],
    }).compile();

    service = module.get<CheckStockDetailService>(CheckStockDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
