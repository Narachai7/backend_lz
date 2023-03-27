import { Module } from '@nestjs/common';
import { SalarylogService } from './salarylog.service';
import { SalarylogController } from './salarylog.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Salarylog } from './entities/salarylog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Salarylog])],
  controllers: [SalarylogController],
  providers: [SalarylogService],
})
export class SalarylogModule {}
