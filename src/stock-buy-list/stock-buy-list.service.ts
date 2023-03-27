import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStockBuyListDto } from './dto/create-stock-buy-list.dto';
import { UpdateStockBuyListDto } from './dto/update-stock-buy-list.dto';
import { StockBuyList } from './entities/stock-buy-list.entity';

@Injectable()
export class StockBuyListService {
  constructor(
    @InjectRepository(StockBuyList)
    private stockBuyListsRepository: Repository<StockBuyList>,
  ) {}

  create(createStockBuyListDto: CreateStockBuyListDto) {
    return this.stockBuyListsRepository.save(createStockBuyListDto);
  }

  findAll() {
    return this.stockBuyListsRepository.find();
  }

  findOne(id: number) {
    return this.stockBuyListsRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateStockBuyListDto: UpdateStockBuyListDto) {
    try {
      const updatedStockBuyList = await this.stockBuyListsRepository.save({
        id,
        ...updateStockBuyListDto,
      });
      return updatedStockBuyList;
    } catch (e) {
      throw new NotFoundException();
    }
  }

  async remove(id: number) {
    const stockBuyList = await this.stockBuyListsRepository.findOne({
      where: { id: id },
    });
    try {
      const deletedStockBuyList = await this.stockBuyListsRepository.remove(
        stockBuyList,
      );
      return deletedStockBuyList;
    } catch (e) {
      throw new NotFoundException();
    }
  }
}
