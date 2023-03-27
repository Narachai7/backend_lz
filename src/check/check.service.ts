import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Salary } from 'src/salary/entities/salary.entity';
import { Repository } from 'typeorm';
import { CreateCheckDto } from './dto/create-check.dto';
import { UpdateCheckDto } from './dto/update-check.dto';
import { Check } from './entities/check.entity';

@Injectable()
export class CheckService {
  constructor(
    @InjectRepository(Check)
    private checkRepository: Repository<Check>,
  ) {}
  create(createCheckDto: CreateCheckDto) {
    return this.checkRepository.save(createCheckDto);
  }

  findAll() {
    return this.checkRepository.find({ relations: ['user'] });
  }

  findOne(id: number) {
    return this.checkRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updatecheckDto: UpdateCheckDto) {
    try {
      const updatedProduct = await this.checkRepository.save({
        id,
        ...updatecheckDto,
      });
      return updatedProduct;
    } catch (e) {
      throw new NotFoundException();
    }
  }

  async remove(id: number) {
    const check = await this.checkRepository.findOne({
      where: { id: id },
    });
    try {
      const deletedTable = await this.checkRepository.remove(check);
      return deletedTable;
    } catch (e) {
      throw new NotFoundException();
    }
  }
}
