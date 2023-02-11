import { IsInt, IsString } from 'class-validator';

export class CreateCharacterDto {
  @IsString()
  public uid: string;

  @IsString()
  public image: string;

  @IsInt()
  public ref: string;

  @IsString()
  public name: string;

  @IsString()
  public comment: string;

  @IsInt()
  public score: number;
}