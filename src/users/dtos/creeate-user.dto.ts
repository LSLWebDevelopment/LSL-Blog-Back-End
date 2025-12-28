import {
  IsOptional,
  IsString,
  MinLength,
  MaxLength,
  IsNotEmpty,
  IsEmail,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  @MaxLength(64)
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(64)
  lastName?: string;

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(128)
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(128)
  @Matches(/^(?=.*[A-Za-z])(?=.*[!@#$%&*])[A-Za-z\d!@#$%&*]{8,}$/, {
    message:
      'Minimum eight characters, at least one letter, on number and one special character',
  })
  password: string;
}
