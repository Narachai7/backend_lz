import { Test, TestingModule } from '@nestjs/testing';
import { CheckStockDetailController } from './check-stock-detail.controller';
import { CheckStockDetailService } from './check-stock-detail.service';

describe('CheckStockDetailController', () => {
  let controller: CheckStockDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CheckStockDetailController],
      providers: [CheckStockDetailService],
    }).compile();

    controller = module.get<CheckStockDetailController>(
      CheckStockDetailController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
