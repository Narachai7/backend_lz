import { PartialType } from '@nestjs/mapped-types';
import { CreateStockBuyListDto } from './create-stock-buy-list.dto';

export class UpdateStockBuyListDto extends PartialType(CreateStockBuyListDto) {}
