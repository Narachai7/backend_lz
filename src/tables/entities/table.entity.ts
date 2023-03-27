import { Order } from 'src/orders/entities/order.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Table {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  type: string;
  @Column()
  Number: number;
  @Column()
  status: string;
  @OneToMany(() => Order, (order) => order.table_id)
  order: Order[];
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @DeleteDateColumn()
  deletedAt: Date;
}
