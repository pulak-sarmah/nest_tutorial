import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['INTERN', 'STAF', 'ADMIN'], {
    message: 'Role must be one of INTERN, STAF, or ADMIN',
  })
  role: 'INTERN' | 'STAF' | 'ADMIN';
}
