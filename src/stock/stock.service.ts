import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { Stock } from './entities/stock.entity';

@Injectable()
export class StockService {
  constructor(
    @InjectRepository(Stock)
    private stocksRepository: Repository<Stock>,
  ) {}

  create(createStockDto: CreateStockDto) {
    return this.stocksRepository.save(createStockDto);
  }

  getStockByName(text: string) {
    return this.stocksRepository
      .createQueryBuilder('stock')
      .where('stock.name LIKE :name', { name: `%${text}%` })
      .getMany();
  }

  findAll() {
    return this.stocksRepository.find();
  }

  findOne(id: number) {
    return this.stocksRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateStockDto: UpdateStockDto) {
    try {
      const updatedStock = await this.stocksRepository.save({
        id,
        ...updateStockDto,
      });
      return updatedStock;
    } catch (e) {
      throw new NotFoundException();
    }
  }

  async remove(id: number) {
    const stock = await this.stocksRepository.findOne({
      where: { id: id },
    });
    try {
      const deletedStock = await this.stocksRepository.remove(stock);
      return deletedStock;
    } catch (e) {
      throw new NotFoundException();
    }
  }
}
