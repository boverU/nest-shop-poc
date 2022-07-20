import { Type } from 'class-transformer';
import {
  IsEmail,
  IsString,
  IsNotEmpty,
  MinLength,
  ValidateNested,
  isNotEmpty,
} from 'class-validator';
import AddressDto from 'src/users/dto/address.dto';

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  password: string;

  @Type(() => AddressDto)
  @ValidateNested()
  @IsNotEmpty()
  address: AddressDto;
}

export default RegisterDto;
