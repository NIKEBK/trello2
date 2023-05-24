import { IsNumber, IsString } from "class-validator"

export class UserLoginDTO {
    @IsNumber()
    id: number

    @IsString()
    userName: string

    @IsString()
    password: string

}