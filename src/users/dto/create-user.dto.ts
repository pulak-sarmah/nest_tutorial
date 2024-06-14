import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
    message:
      'Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number',
  })
  password: string;

  @IsEnum(['INTERN', 'STAF', 'ADMIN'], {
    message: 'Role must be one of INTERN, STAF, or ADMIN',
  })
  @IsNotEmpty()
  role: 'INTERN' | 'STAF' | 'ADMIN';

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
