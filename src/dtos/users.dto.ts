import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;

  @IsString()
  public username: string;

  @IsString()
  public fullname: string;
}

export class UpdateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  @IsOptional()
  public password: string;

  @IsString()
  public username: string;

  @IsString()
  public fullname: string;
}

export class LoginUserDto {
  @IsEmail()
  public username: string;

  @IsString()
  public password: string;
}
