import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Table } from './entities/table.entity';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';

@Injectable()
export class TablesService {
  constructor(
    @InjectRepository(Table)
    private tablesRepository: Repository<Table>,
  ) {}

  create(createTableDto: CreateTableDto) {
    return this.tablesRepository.save(createTableDto);
  }

  getTableByName(text: string) {
    return this.tablesRepository
      .createQueryBuilder('table')
      .where('table.type LIKE :type', { type: `%${text}%` })
      .orWhere('table.Number LIKE :number', { number: `%${text}%` })
      .orWhere('table.status LIKE :status', { status: `%${text}%` })
      .getMany();
  }

  findAll() {
    return this.tablesRepository.find();
  }

  findOne(id: number) {
    return this.tablesRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateTableDto: UpdateTableDto) {
    try {
      const updatedTable = await this.tablesRepository.save({
        id,
        ...updateTableDto,
      });
      return updatedTable;
    } catch (e) {
      throw new NotFoundException();
    }
  }

  async remove(id: number) {
    const table = await this.tablesRepository.findOne({
      where: { id: id },
    });
    try {
      const deletedTable = await this.tablesRepository.remove(table);
      return deletedTable;
    } catch (e) {
      throw new NotFoundException();
    }
  }
}
