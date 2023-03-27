import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CheckStockListService } from './check-stock-list.service';
import { CreateCheckStockListDto } from './dto/create-check-stock-list.dto';
import { UpdateCheckStockListDto } from './dto/update-check-stock-list.dto';

@Controller('check-stock-list')
export class CheckStockListController {
  constructor(private readonly checkStockListService: CheckStockListService) {}

  @Post()
  create(@Body() createCheckStockListDto: CreateCheckStockListDto) {
    return this.checkStockListService.create(createCheckStockListDto);
  }

  @Get()
  findAll() {
    return this.checkStockListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.checkStockListService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCheckStockListDto: UpdateCheckStockListDto,
  ) {
    return this.checkStockListService.update(+id, updateCheckStockListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.checkStockListService.remove(+id);
  }
}
