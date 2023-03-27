import { Menu } from 'src/menus/entities/menu.entity';
import { Order } from 'src/orders/entities/order.entity';
import { Queue } from 'src/queues/entities/queue.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Orderitem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  note: string;

  // @Column()
  // status: string;

  @Column()
  numCancel: number;

  @Column()
  numConfirm: number;

  @ManyToOne(() => Menu, (menu) => menu.orderitem)
  menu: Menu;

  @ManyToOne(() => Order, (order) => order.orderitem)
  order: Order;

  @OneToMany(() => Queue, (queue) => queue.orderitem)
  queue: Queue[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
