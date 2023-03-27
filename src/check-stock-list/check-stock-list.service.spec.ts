import { Test, TestingModule } from '@nestjs/testing';
import { CheckStockListService } from './check-stock-list.service';

describe('CheckStockListService', () => {
  let service: CheckStockListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheckStockListService],
    }).compile();

    service = module.get<CheckStockListService>(CheckStockListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
