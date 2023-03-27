import { Test, TestingModule } from '@nestjs/testing';
import { CheckStockListController } from './check-stock-list.controller';
import { CheckStockListService } from './check-stock-list.service';

describe('CheckStockListController', () => {
  let controller: CheckStockListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CheckStockListController],
      providers: [CheckStockListService],
    }).compile();

    controller = module.get<CheckStockListController>(CheckStockListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
