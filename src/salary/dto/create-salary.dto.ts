import { User } from 'src/users/entities/user.entity';

export class CreateSalaryDto {
  id: number;

  user: User;

  bonus: number;

  deduct: number;

  work: number;
}
