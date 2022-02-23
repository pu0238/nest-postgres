import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateUser {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  lastName: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  email: string;
}
