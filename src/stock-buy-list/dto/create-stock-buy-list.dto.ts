import { IsNotEmpty } from 'class-validator';
import { StockBuyDetail } from 'src/stock-buy-detail/entities/stock-buy-detail.entity';
import { User } from 'src/users/entities/user.entity';
export class CreateStockBuyListDto {
  @IsNotEmpty()
  totalPrice: number;

  @IsNotEmpty()
  store: string;

  user: User;

  stockBuyDetail: StockBuyDetail;
}
