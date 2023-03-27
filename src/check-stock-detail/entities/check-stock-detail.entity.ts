import { CheckStockList } from 'src/check-stock-list/entities/check-stock-list.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class CheckStockDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  remaining: number;

  @Column()
  unit: string;

  @Column()
  price: number;

  @Column()
  check: number;

  @ManyToOne(
    () => CheckStockList,
    (checkStockList) => checkStockList.checkStockDetail,
  )
  checkStockList: CheckStockList;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
