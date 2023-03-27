import { CheckStockDetail } from 'src/check-stock-detail/entities/check-stock-detail.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class CheckStockList {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.checkStockList)
  user: User;

  @OneToMany(
    () => CheckStockDetail,
    (checkStockDetail) => checkStockDetail.checkStockList,
  )
  checkStockDetail: CheckStockDetail[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
