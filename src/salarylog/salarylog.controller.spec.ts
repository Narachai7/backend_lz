import { Test, TestingModule } from '@nestjs/testing';
import { SalarylogController } from './salarylog.controller';
import { SalarylogService } from './salarylog.service';

describe('SalarylogController', () => {
  let controller: SalarylogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalarylogController],
      providers: [SalarylogService],
    }).compile();

    controller = module.get<SalarylogController>(SalarylogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
