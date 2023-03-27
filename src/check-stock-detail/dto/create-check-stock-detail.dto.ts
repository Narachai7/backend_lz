import { CheckStockList } from 'src/check-stock-list/entities/check-stock-list.entity';
import { User } from 'src/users/entities/user.entity';

export class CreateCheckStockDetailDto {
  name: string;
  minimum: number;
  remaining: number;
  unit: string;
  price: number;
  check?: number;
  checkStockList: CheckStockList;
}
