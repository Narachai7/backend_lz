import { Orderitem } from 'src/orderitems/entities/orderitem.entity';
import { Table } from 'src/tables/entities/table.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp' })
  date: Date;

  @Column()
  status: string;

  @Column()
  uuid: string;

  // , (table) => table.id

  @ManyToOne(() => Table, (table_id) => table_id.id)
  @JoinColumn()
  table_id: Table;

  @OneToMany(() => Orderitem, (orderitem) => orderitem.menu)
  orderitem: Orderitem[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
