import { IsUUID, IsString, IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty({ message: 'Title must not be empty' })
  title: string;

  @IsString()
  priority: string;

  @IsString()
  status: string;

  @IsUUID()
  userID: string;
}
