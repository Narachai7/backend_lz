import { PartialType } from '@nestjs/mapped-types';
import { CreateCheckStockDetailDto } from './create-check-stock-detail.dto';

export class UpdateCheckStockDetailDto extends PartialType(
  CreateCheckStockDetailDto,
) {}
