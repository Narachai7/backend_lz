import { Basket } from 'src/baskets/entities/basket.entity';
import { Orderitem } from 'src/orderitems/entities/orderitem.entity';
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
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'float' })
  price: number;

  @Column()
  type: string;

  @Column()
  status: string;

  @OneToMany(() => Basket, (basket) => basket.menu)
  basket: Basket[];

  @OneToMany(() => Orderitem, (orderitem) => orderitem.menu)
  orderitem: Orderitem[];

  @Column({
    default: 'No_Image_Available.png',
  })
  image: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
