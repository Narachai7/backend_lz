import { IsNotEmpty } from 'class-validator';
export class CreateQueueDto {
  @IsNotEmpty()
  status: string;
}
