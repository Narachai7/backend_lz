import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ServeService } from './serve.service';
import { CreateServeDto } from './dto/create-serve.dto';
import { UpdateServeDto } from './dto/update-serve.dto';

@Controller('serve')
export class ServeController {
  constructor(private readonly serveService: ServeService) {}

  @Post()
  create(@Body() createServeDto: CreateServeDto) {
    return this.serveService.create(createServeDto);
  }

  @Get()
  findAll() {
    return this.serveService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serveService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServeDto: UpdateServeDto) {
    return this.serveService.update(+id, updateServeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serveService.remove(+id);
  }
}
