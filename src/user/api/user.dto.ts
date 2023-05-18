import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length, isString } from 'class-validator';

export class CreateUserDTO {
    @IsString()
    username: string;

    @IsString()
    password: string;
}