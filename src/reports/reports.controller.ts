import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ReportsService } from './reports.service';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { query } from 'express';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('CookDay')
  getCookBy() {
    return this.reportsService.getCookBy();
  }

  @Get('price')
  getSumPrice(
    @Query()
    query: {
      search?: string;
    },
  ) {
    if (query.search) {
      return this.reportsService.getSumPriceSearch(query.search);
    }
    return this.reportsService.getSumPrice();
  }

  @Get('order')
  getSumOrder(
    @Query()
    query: {
      search?: string;
    },
  ) {
    if (query.search) {
      return this.reportsService.getSumOrderSearch(query.search);
    }
    return this.reportsService.getSumOrder();
  }

  @Get('table')
  getCountTable(
    @Query()
    query: {
      search?: string;
    },
  ) {
    if (query.search) {
      return this.reportsService.getCountTableSearch(query.search);
    }
    return this.reportsService.getCountTable();
  }

  @Get('topMenu')
  getTopMenu(
    @Query()
    query: {
      search?: string;
    },
  ) {
    if (query.search) {
      return this.reportsService.getTopMenuSearch(query.search);
    }
    return this.reportsService.getTopMenu();
  }

  @Get('topChef')
  getTopChef(
    @Query()
    query: {
      search?: string;
    },
  ) {
    if (query.search) {
      return this.reportsService.getTopChefSearch(query.search);
    }
    return this.reportsService.getTopChef();
  }

  @Get('topServe')
  getTopServe(
    @Query()
    query: {
      search?: string;
    },
  ) {
    if (query.search) {
      return this.reportsService.getTopServeSearch(query.search);
    }
    return this.reportsService.getTopServe();
  }

  @Get('price7day')
  getPrice7day() {
    return this.reportsService.getPrice7day();
  }

  @Get('price12month')
  getPrice12month() {
    return this.reportsService.getPrice12month();
  }

  // @Post()
  // create(@Body() createReportDto: CreateReportDto) {
  //   return this.reportsService.create(createReportDto);
  // }

  // @Get()
  // findAll() {
  //   return this.reportsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.reportsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateReportDto: UpdateReportDto) {
  //   return this.reportsService.update(+id, updateReportDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.reportsService.remove(+id);
  // }
}
