import { Menu } from 'src/menus/entities/menu.entity';
import { Order } from 'src/orders/entities/order.entity';

export class CreateOrderitemDto {
  amount: number;
  note: string;
  status: string;
  menu: Menu;
  order: Order;
}
