import { IsNotEmpty, Matches } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  fname: string;

  @IsNotEmpty()
  lname: string;

  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  rate: number;

  @IsNotEmpty()
  gender: string;

  @IsNotEmpty()
  tel: string;

  image = 'No_Image_Available.png';

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  )
  password: string;
}
