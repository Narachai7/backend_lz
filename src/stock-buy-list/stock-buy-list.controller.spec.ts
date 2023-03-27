import { Test, TestingModule } from '@nestjs/testing';
import { StockBuyListController } from './stock-buy-list.controller';
import { StockBuyListService } from './stock-buy-list.service';

describe('StockBuyListController', () => {
  let controller: StockBuyListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockBuyListController],
      providers: [StockBuyListService],
    }).compile();

    controller = module.get<StockBuyListController>(StockBuyListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
