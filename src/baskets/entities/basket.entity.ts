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
import { Menu } from 'src/menus/entities/menu.entity';
import { Queue } from 'src/queues/entities/queue.entity';

@Entity()
export class Basket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  note: string;

  @Column()
  order: number;

  @ManyToOne(() => Menu, (menu) => menu.basket)
  menu: Menu;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
