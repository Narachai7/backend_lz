import { Order } from 'src/orders/entities/order.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinColumn,
  ManyToOne,
  OneToOne,
  Column,
} from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  price: number; //ราคารวม
  @Column()
  received: number; //เงินที่ได้รับ
  @Column()
  moneyChange: number; //เงินทอน
  @Column()
  netPrice: number; //ราคาสุทธิ
  @Column()
  discount: number; //ราคาส่วนลด

  @OneToOne(() => Order)
  @JoinColumn()
  order: Order;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn()
  user: User[];

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @DeleteDateColumn()
  deletedAt: Date;
}
