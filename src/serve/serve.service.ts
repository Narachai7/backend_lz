import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateServeDto } from './dto/create-serve.dto';
import { UpdateServeDto } from './dto/update-serve.dto';
import { Serve } from './entities/serve.entity';

@Injectable()
export class ServeService {
  constructor(
    @InjectRepository(Serve)
    private serveRepository: Repository<Serve>,
  ) {}
  create(createServeDto: CreateServeDto) {
    return this.serveRepository.save(createServeDto);
  }

  findAll() {
    return this.serveRepository.find();
  }

  findOne(id: number) {
    return this.serveRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateServeDto: UpdateServeDto) {
    try {
      const updatedProduct = await this.serveRepository.save({
        id,
        ...updateServeDto,
      });
      return updatedProduct;
    } catch (e) {
      throw new NotFoundException();
    }
  }

  async remove(id: number) {
    const serve = await this.serveRepository.findOne({
      where: { id: id },
    });
    try {
      const deletedTable = await this.serveRepository.remove(serve);
      return deletedTable;
    } catch (e) {
      throw new NotFoundException();
    }
  }
}
