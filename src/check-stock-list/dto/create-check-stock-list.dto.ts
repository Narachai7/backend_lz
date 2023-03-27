import { IsNotEmpty } from 'class-validator';
import { CheckStockDetail } from 'src/check-stock-detail/entities/check-stock-detail.entity';
import { User } from 'src/users/entities/user.entity';
export class CreateCheckStockListDto {
  user: User;
}
