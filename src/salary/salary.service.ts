import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSalaryDto } from './dto/create-salary.dto';
import { UpdateSalaryDto } from './dto/update-salary.dto';
import { Salary } from './entities/salary.entity';

@Injectable()
export class SalaryService {
  constructor(
    @InjectRepository(Salary)
    private salaryRepository: Repository<Salary>,
  ) {}
  create(createSalaryDto: CreateSalaryDto) {
    return this.salaryRepository.save(createSalaryDto);
  }

  findAll() {
    return this.salaryRepository.find({ relations: ['user'] });
  }

  findOne(id: number) {
    return this.salaryRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateSalaryDto: UpdateSalaryDto) {
    try {
      const updatedProduct = await this.salaryRepository.save({
        id,
        ...updateSalaryDto,
      });
      return updatedProduct;
    } catch (e) {
      throw new NotFoundException();
    }
  }

  async remove(id: number) {
    const salary = await this.salaryRepository.findOne({
      where: { id: id },
    });
    try {
      const deletedTable = await this.salaryRepository.remove(salary);
      return deletedTable;
    } catch (e) {
      throw new NotFoundException();
    }
  }
}
