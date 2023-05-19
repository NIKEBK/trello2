import { IsString } from "class-validator"

export class AuthUserResponse {
    @IsString()
    userName: string

    @IsString()
    password: string

}
