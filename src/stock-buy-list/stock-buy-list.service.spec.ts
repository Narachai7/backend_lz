import { Test, TestingModule } from '@nestjs/testing';
import { StockBuyListService } from './stock-buy-list.service';

describe('StockBuyListService', () => {
  let service: StockBuyListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockBuyListService],
    }).compile();

    service = module.get<StockBuyListService>(StockBuyListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
