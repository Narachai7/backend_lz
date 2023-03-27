import { PartialType } from '@nestjs/mapped-types';
import { CreateStockBuyDetailDto } from './create-stock-buy-detail.dto';

export class UpdateStockBuyDetailDto extends PartialType(
  CreateStockBuyDetailDto,
) {}
