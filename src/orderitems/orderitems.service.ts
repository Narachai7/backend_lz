import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { And, Repository } from 'typeorm';
import { CreateOrderitemDto } from './dto/create-orderitem.dto';
import { UpdateOrderitemDto } from './dto/update-orderitem.dto';
import { Orderitem } from './entities/orderitem.entity';

@Injectable()
export class OrderitemsService {
  constructor(
    @InjectRepository(Orderitem)
    private orderitemsRepository: Repository<Orderitem>,
  ) {}

  create(createOrderitemDto: CreateOrderitemDto) {
    return this.orderitemsRepository.save(createOrderitemDto);
  }

  findAll() {
    return this.orderitemsRepository.find({
      relations: ['menu', 'order'],
      // where: [{ status: 'กำลังปรุงอาหาร' }, { status: 'กำลังรอเสิร์ฟ' }],
    });
  }

  findAllByOrderId(order: number) {
    return this.orderitemsRepository.find({
      relations: ['menu', 'order', 'order.table_id'],
      where: { order: { id: order } },
    });
  }

  // findAllByStatus(text: string) {
  //   return this.orderitemsRepository.find({
  //     relations: ['menu', 'order', 'order.table_id'],
  //     where: { status: text },
  //   });
  // }

  findOne(id: number) {
    return `This action returns a #${id} orderitem`;
  }

  async update(id: number, updateOrderitemDto: UpdateOrderitemDto) {
    try {
      const updatedOrder = await this.orderitemsRepository.save({
        id,
        ...updateOrderitemDto,
      });
      return updatedOrder;
    } catch (e) {
      throw new NotFoundException();
    }
  }

  remove(id: number) {
    return `This action removes a #${id} orderitem`;
  }
}
