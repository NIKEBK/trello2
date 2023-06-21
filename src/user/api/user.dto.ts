import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length, isString } from 'class-validator';

export class CreateUserDTO {
    @IsString()
    userName: string;

    @IsString()
    password: string;
}
export class UpdateUserDTO {
    @IsString()
    userName: string;
}