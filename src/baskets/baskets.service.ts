import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBasketDto } from './dto/create-basket.dto';
import { UpdateBasketDto } from './dto/update-basket.dto';
import { Basket } from './entities/basket.entity';

@Injectable()
export class BasketsService {
  constructor(
    @InjectRepository(Basket)
    private basketsRepository: Repository<Basket>,
  ) {}

  create(createBasketDto: CreateBasketDto) {
    return this.basketsRepository.save(createBasketDto);
  }

  findAll() {
    return this.basketsRepository.find({ relations: ['menu'] });
  }

  findAllByOrderId(order: number) {
    return this.basketsRepository.find({
      relations: ['menu'],
      where: { order: order },
    });
  }

  findOne(id: number) {
    return this.basketsRepository.findOne({
      where: { id: id },
      relations: ['menu'],
    });
  }

  async update(id: number, updateBasketDto: UpdateBasketDto) {
    try {
      const updatedBasket = await this.basketsRepository.save({
        id,
        ...updateBasketDto,
      });
      return updatedBasket;
    } catch (e) {
      throw new NotFoundException();
    }
  }

  async remove(id: number) {
    const basket = await this.basketsRepository.findOne({
      where: { id: id },
    });
    try {
      const deletedBasket = await this.basketsRepository.remove(basket);
      return deletedBasket;
    } catch (e) {
      throw new NotFoundException();
    }
  }
}
