import { Test, TestingModule } from '@nestjs/testing';
import { StockBuyDetailService } from './stock-buy-detail.service';

describe('StockBuyDetailService', () => {
  let service: StockBuyDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockBuyDetailService],
    }).compile();

    service = module.get<StockBuyDetailService>(StockBuyDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
