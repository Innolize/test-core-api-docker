import { IsEnum, IsNumber, IsString } from 'class-validator';
import { Format } from '@modules/book/domain/format.emun';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsEnum(Format)
  format: string;

  @IsNumber()
  author: number;
}
