import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import * as QRCode from 'qrcode';

@Injectable()
export class OrdersService {
  private currentOrder = 1;
  private readonly logger = new Logger(OrdersService.name);
  getNextOrder(): number {
    return ++this.currentOrder;
  }
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
  ) {}

  create(createOrderDto: CreateOrderDto) {
    return this.ordersRepository.save(createOrderDto);
  }

  findAll() {
    return this.ordersRepository.find({ relations: ['table_id'] });
  }

  findAllbyTable(id: number) {
    return this.ordersRepository.find({
      relations: ['table_id'],
      where: { table_id: { id: id }, status: 'กำลังใช้งาน' },
    });
  }

  findOne(id: number) {
    return this.ordersRepository.findOne({
      relations: ['table_id'],
      where: { id: id },
    });
  }

  findOneByUuid(uuid: string) {
    return this.ordersRepository.findOne({
      relations: ['table_id'],
      where: { uuid: uuid },
    });
  }

  async generateQRCode(orderId: number): Promise<string> {
    const url = `http://localhost:3000/food?order=${orderId}`;
    const qrCode = await QRCode.toDataURL(url);
    return qrCode;
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    try {
      const updatedOrder = await this.ordersRepository.save({
        id,
        ...updateOrderDto,
      });
      return updatedOrder;
    } catch (e) {
      throw new NotFoundException();
    }
  }

  async remove(id: number) {
    const order = await this.ordersRepository.findOne({
      where: { id: id },
    });
    try {
      const deletedOrder = await this.ordersRepository.remove(order);
      return deletedOrder;
    } catch (e) {
      throw new NotFoundException();
    }
  }
}
