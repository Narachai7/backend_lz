import { PartialType } from '@nestjs/mapped-types';
import { CreateSalarylogDto } from './create-salarylog.dto';

export class UpdateSalarylogDto extends PartialType(CreateSalarylogDto) {}
