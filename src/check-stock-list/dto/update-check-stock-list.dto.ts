import { PartialType } from '@nestjs/mapped-types';
import { CreateCheckStockListDto } from './create-check-stock-list.dto';

export class UpdateCheckStockListDto extends PartialType(
  CreateCheckStockListDto,
) {}
