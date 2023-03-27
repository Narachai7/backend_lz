import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCheckStockDetailDto } from './dto/create-check-stock-detail.dto';
import { UpdateCheckStockDetailDto } from './dto/update-check-stock-detail.dto';
import { CheckStockDetail } from './entities/check-stock-detail.entity';

@Injectable()
export class CheckStockDetailService {
  constructor(
    @InjectRepository(CheckStockDetail)
    private checkStockDetailRepository: Repository<CheckStockDetail>,
  ) {}

  create(createCheckStockDetailDto: CreateCheckStockDetailDto) {
    return this.checkStockDetailRepository.save(createCheckStockDetailDto);
  }

  findAll() {
    return this.checkStockDetailRepository.find();
  }

  findOne(id: number) {
    return this.checkStockDetailRepository.find({
      where: { checkStockList: { id: id } },
    });
  }

  async update(
    id: number,
    updateCheckStockDetailDto: UpdateCheckStockDetailDto,
  ) {
    try {
      const updatedCheckStockDetail =
        await this.checkStockDetailRepository.save({
          id,
          ...updateCheckStockDetailDto,
        });
      return updatedCheckStockDetail;
    } catch (e) {
      throw new NotFoundException();
    }
  }

  async remove(id: number) {
    const checkStockDetail = await this.checkStockDetailRepository.findOne({
      where: { id: id },
    });
    try {
      const deletedCheckStockDetail =
        await this.checkStockDetailRepository.remove(checkStockDetail);
      return deletedCheckStockDetail;
    } catch (e) {
      throw new NotFoundException();
    }
  }
}
