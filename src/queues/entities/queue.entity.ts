import { User } from 'src/users/entities/user.entity';
import { Orderitem } from 'src/orderitems/entities/orderitem.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Queue {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @ManyToOne(() => Orderitem, (orderitem) => orderitem.queue)
  orderitem: Orderitem;

  @ManyToOne(() => User, (user) => user.queuecook)
  emp_cook: User;

  @ManyToOne(() => User, (user) => user.queueserve)
  emp_serve: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
