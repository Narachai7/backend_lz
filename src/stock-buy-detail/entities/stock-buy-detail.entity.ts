import { StockBuyList } from 'src/stock-buy-list/entities/stock-buy-list.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  Column,
} from 'typeorm';

@Entity()
export class StockBuyDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  unit: string;

  @Column({ type: 'float' })
  price: number;

  @ManyToOne(() => StockBuyList, (stockBuyList) => stockBuyList.stockBuyDetail)
  stockBuyList: StockBuyList;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
