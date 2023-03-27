import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SalarylogService } from './salarylog.service';
import { CreateSalarylogDto } from './dto/create-salarylog.dto';
import { UpdateSalarylogDto } from './dto/update-salarylog.dto';

@Controller('salarylog')
export class SalarylogController {
  constructor(private readonly salarylogService: SalarylogService) {}

  @Post()
  create(@Body() createSalarylogDto: CreateSalarylogDto) {
    return this.salarylogService.create(createSalarylogDto);
  }

  @Get()
  findAll() {
    return this.salarylogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salarylogService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSalarylogDto: UpdateSalarylogDto,
  ) {
    return this.salarylogService.update(+id, updateSalarylogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salarylogService.remove(+id);
  }
}
