import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStockBuyDetailDto } from './dto/create-stock-buy-detail.dto';
import { UpdateStockBuyDetailDto } from './dto/update-stock-buy-detail.dto';
import { StockBuyDetail } from './entities/stock-buy-detail.entity';

@Injectable()
export class StockBuyDetailService {
  constructor(
    @InjectRepository(StockBuyDetail)
    private stockBuyDetailRepository: Repository<StockBuyDetail>,
  ) {}

  create(createStockBuyDetailDto: CreateStockBuyDetailDto) {
    return this.stockBuyDetailRepository.save(createStockBuyDetailDto);
  }

  findAll() {
    return this.stockBuyDetailRepository.find();
  }

  findOne(id: number) {
    return this.stockBuyDetailRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateStockBuyDetailDto: UpdateStockBuyDetailDto) {
    try {
      const updateStockBuyDetail = await this.stockBuyDetailRepository.save({
        id,
        ...updateStockBuyDetailDto,
      });
      return updateStockBuyDetail;
    } catch (e) {
      throw new NotFoundException();
    }
  }

  async remove(id: number) {
    const stockBuyDetail = await this.stockBuyDetailRepository.findOne({
      where: { id: id },
    });
    try {
      const deletedStockBuyDetail = await this.stockBuyDetailRepository.remove(
        stockBuyDetail,
      );
      return deletedStockBuyDetail;
    } catch (e) {
      throw new NotFoundException();
    }
  }
}
