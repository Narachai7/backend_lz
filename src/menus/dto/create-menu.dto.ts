import { IsNotEmpty } from 'class-validator';

export class CreateMenuDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  status: string;

  image = 'No_Image_Available.png';
}
