import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQueueDto } from './dto/create-queue.dto';
import { UpdateQueueDto } from './dto/update-queue.dto';
import { Queue } from './entities/queue.entity';

@Injectable()
export class QueuesService {
  constructor(
    @InjectRepository(Queue)
    private queuesRepository: Repository<Queue>,
  ) {}
  create(createQueueDto: CreateQueueDto) {
    return this.queuesRepository.save(createQueueDto);
  }

  findAll() {
    return this.queuesRepository.find();
  }

  findAllByStatus(text: string) {
    return this.queuesRepository.find({
      relations: [
        'orderitem',
        'orderitem.menu',
        'orderitem.order',
        'orderitem.order.table_id',
        'emp_cook',
        'emp_serve',
      ],
      where: { status: text },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} queue`;
  }

  async update(id: number, updateQueueDto: UpdateQueueDto) {
    try {
      const updatedQueue = await this.queuesRepository.save({
        id,
        ...updateQueueDto,
      });
      return updatedQueue;
    } catch (e) {
      throw new NotFoundException();
    }
  }

  remove(id: number) {
    return `This action removes a #${id} queue`;
  }
}
