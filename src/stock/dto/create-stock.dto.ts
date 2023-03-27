import { IsNotEmpty } from 'class-validator';
export class CreateStockDto {
  name: string;

  minimum: number;

  remaining: number;

  unit: string;

  price: number;
}
