import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class Serve {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  table: string;

  @Column({
    default: 1,
  })
  amount: number;

  @Column()
  type: string;

  @Column({
    default: 'ยังไม่เสริฟ',
  })
  status: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
