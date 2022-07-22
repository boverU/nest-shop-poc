import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsOptional, IsString, IsNotEmpty } from 'class-validator';
import { CreateCategoryDto } from './create-category.dto';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
  @IsNumber()
  @IsOptional()
  id: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name: string;
}
