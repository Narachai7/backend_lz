import { User } from 'src/users/entities/user.entity';
import { StockBuyDetail } from 'src/stock-buy-detail/entities/stock-buy-detail.entity';
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
export class StockBuyList {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.stockBuyList)
  user: User;

  @Column({ type: 'float' })
  totalPrice: number;

  @Column()
  store: string;

  @OneToMany(
    () => StockBuyDetail,
    (stockBuyDetail) => stockBuyDetail.stockBuyList,
  )
  stockBuyDetail: StockBuyDetail;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
