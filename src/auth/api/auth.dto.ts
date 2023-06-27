import { IsNumber, IsString } from "class-validator"

export class UserLoginDTO {
    @IsNumber()
    id: number

    @IsString()
    userName: string

    @IsString()
    password: string

}

export class RegisterUserDTO {
    @IsString()
    userName: string;

    @IsString()
    password: string;
}

export class AuthUserResponse {
    @IsString()
    userName: string

    @IsString()
    password: string

    @IsString()
    token: string

}