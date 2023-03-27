import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Check {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.check)
  user: User;

  @Column({
    default: false,
  })
  isLate: boolean;

  @Column()
  checkIn: string;

  @Column()
  checkOut: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
