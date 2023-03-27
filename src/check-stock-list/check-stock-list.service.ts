import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCheckStockListDto } from './dto/create-check-stock-list.dto';
import { UpdateCheckStockListDto } from './dto/update-check-stock-list.dto';
import { CheckStockList } from './entities/check-stock-list.entity';

@Injectable()
export class CheckStockListService {
  constructor(
    @InjectRepository(CheckStockList)
    private checkStockListsRepository: Repository<CheckStockList>,
  ) {}

  create(createCheckStockListDto: CreateCheckStockListDto) {
    return this.checkStockListsRepository.save(createCheckStockListDto);
  }

  findAll() {
    return this.checkStockListsRepository.find({ relations: ['user'] });
  }

  findOne(id: number) {
    return this.checkStockListsRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateCheckStockListDto: UpdateCheckStockListDto) {
    try {
      const updatedCheckStockList = await this.checkStockListsRepository.save({
        id,
        ...updateCheckStockListDto,
      });
      return updatedCheckStockList;
    } catch (e) {
      throw new NotFoundException();
    }
  }

  async remove(id: number) {
    const checkStockList = await this.checkStockListsRepository.findOne({
      where: { id: id },
    });
    try {
      const deletedCheckStockList = await this.checkStockListsRepository.remove(
        checkStockList,
      );
      return deletedCheckStockList;
    } catch (e) {
      throw new NotFoundException();
    }
  }
}
