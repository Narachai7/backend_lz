import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StockBuyDetailService } from './stock-buy-detail.service';
import { CreateStockBuyDetailDto } from './dto/create-stock-buy-detail.dto';
import { UpdateStockBuyDetailDto } from './dto/update-stock-buy-detail.dto';

@Controller('stock-buy-detail')
export class StockBuyDetailController {
  constructor(private readonly stockBuyDetailService: StockBuyDetailService) {}

  @Post()
  create(@Body() createStockBuyDetailDto: CreateStockBuyDetailDto) {
    return this.stockBuyDetailService.create(createStockBuyDetailDto);
  }

  @Get()
  findAll() {
    return this.stockBuyDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockBuyDetailService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStockBuyDetailDto: UpdateStockBuyDetailDto,
  ) {
    return this.stockBuyDetailService.update(+id, updateStockBuyDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockBuyDetailService.remove(+id);
  }
}
