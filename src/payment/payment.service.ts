import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { Payment } from './entities/payment.entity';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private paymentRepository: Repository<Payment>,
  ) {}

  create(createPaymentDto: CreatePaymentDto) {
    return this.paymentRepository.save(createPaymentDto);
  }

  findAll() {
    return this.paymentRepository.find({ relations: ['order'] });
  }

  findOne(id: number) {
    return this.paymentRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    try {
      const updatedPayment = await this.paymentRepository.save({
        id,
        ...updatePaymentDto,
      });
      return updatedPayment;
    } catch (e) {
      throw new NotFoundException();
    }
  }

  async remove(id: number) {
    const payment = await this.paymentRepository.findOne({
      where: { id: id },
    });
    try {
      const deletedPayment = await this.paymentRepository.remove(payment);
      return deletedPayment;
    } catch (e) {
      throw new NotFoundException();
    }
  }
}
