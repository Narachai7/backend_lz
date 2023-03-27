import { CheckStockList } from 'src/check-stock-list/entities/check-stock-list.entity';
import { Check } from 'src/check/entities/check.entity';
import { Queue } from 'src/queues/entities/queue.entity';
import { Salarylog } from 'src/salarylog/entities/salarylog.entity';
import { StockBuyList } from 'src/stock-buy-list/entities/stock-buy-list.entity';
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
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fname: string;

  @Column()
  lname: string;

  @Column()
  type: string;

  @Column({ type: 'float' })
  rate: number;

  @Column()
  gender: string;

  @Column()
  tel: string;

  @Column({
    default: 'No_Image_Available.png',
  })
  image: string;

  @OneToMany(() => Queue, (queue) => queue.emp_cook)
  queuecook: Queue[];

  @OneToMany(() => Queue, (queue) => queue.emp_serve)
  queueserve: Queue[];

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => Check, (check) => check.user)
  check: Check[];

  @OneToMany(() => Salarylog, (salarylog) => salarylog.user)
  salarylog: Salarylog[];

  @OneToMany(() => CheckStockList, (checkStockList) => checkStockList.user)
  checkStockList: CheckStockList[];

  @OneToMany(() => StockBuyList, (stockBuyList) => stockBuyList.user)
  stockBuyList: StockBuyList[];
}
