import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StockBuyListService } from './stock-buy-list.service';
import { CreateStockBuyListDto } from './dto/create-stock-buy-list.dto';
import { UpdateStockBuyListDto } from './dto/update-stock-buy-list.dto';

@Controller('stock-buy-list')
export class StockBuyListController {
  constructor(private readonly stockBuyListService: StockBuyListService) {}

  @Post()
  create(@Body() createStockBuyListDto: CreateStockBuyListDto) {
    return this.stockBuyListService.create(createStockBuyListDto);
  }

  @Get()
  findAll() {
    return this.stockBuyListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockBuyListService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStockBuyListDto: UpdateStockBuyListDto,
  ) {
    return this.stockBuyListService.update(+id, updateStockBuyListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockBuyListService.remove(+id);
  }
}
