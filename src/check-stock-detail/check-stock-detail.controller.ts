import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CheckStockDetailService } from './check-stock-detail.service';
import { CreateCheckStockDetailDto } from './dto/create-check-stock-detail.dto';
import { UpdateCheckStockDetailDto } from './dto/update-check-stock-detail.dto';

@Controller('check-stock-detail')
export class CheckStockDetailController {
  constructor(
    private readonly checkStockDetailService: CheckStockDetailService,
  ) {}

  @Post()
  create(@Body() createCheckStockDetailDto: CreateCheckStockDetailDto) {
    return this.checkStockDetailService.create(createCheckStockDetailDto);
  }

  @Get()
  findAll() {
    return this.checkStockDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.checkStockDetailService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCheckStockDetailDto: UpdateCheckStockDetailDto,
  ) {
    return this.checkStockDetailService.update(+id, updateCheckStockDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.checkStockDetailService.remove(+id);
  }
}
