import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSalarylogDto } from './dto/create-salarylog.dto';
import { UpdateSalarylogDto } from './dto/update-salarylog.dto';
import { Salarylog } from './entities/salarylog.entity';

@Injectable()
export class SalarylogService {
  constructor(
    @InjectRepository(Salarylog)
    private salarylogRepository: Repository<Salarylog>,
  ) {}

  create(createSalarylogDto: CreateSalarylogDto) {
    return this.salarylogRepository.save(createSalarylogDto);
  }

  findAll() {
    return this.salarylogRepository.find({ relations: ['user'] });
  }

  findOne(id: number) {
    return this.salarylogRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateSalarylogDto: UpdateSalarylogDto) {
    try {
      const updatedProduct = await this.salarylogRepository.save({
        id,
        ...updateSalarylogDto,
      });
      return updatedProduct;
    } catch (e) {
      throw new NotFoundException();
    }
  }

  async remove(id: number) {
    const check = await this.salarylogRepository.findOne({
      where: { id: id },
    });
    try {
      const deletedTable = await this.salarylogRepository.remove(check);
      return deletedTable;
    } catch (e) {
      throw new NotFoundException();
    }
  }
}
