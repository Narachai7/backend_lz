import { Test, TestingModule } from '@nestjs/testing';
import { StockBuyDetailController } from './stock-buy-detail.controller';
import { StockBuyDetailService } from './stock-buy-detail.service';

describe('StockBuyDetailController', () => {
  let controller: StockBuyDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockBuyDetailController],
      providers: [StockBuyDetailService],
    }).compile();

    controller = module.get<StockBuyDetailController>(StockBuyDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
