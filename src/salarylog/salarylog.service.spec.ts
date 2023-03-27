import { Test, TestingModule } from '@nestjs/testing';
import { SalarylogService } from './salarylog.service';

describe('SalarylogService', () => {
  let service: SalarylogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalarylogService],
    }).compile();

    service = module.get<SalarylogService>(SalarylogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
