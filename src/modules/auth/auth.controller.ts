import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from 'src/user/api/user.dto';
import { UserLoginDTO } from './dto/auth.dto';
import { AuthUserResponse } from './response/response';

@Controller('auth')
export class AuthController {
    constructor(private readonly AuthService: AuthService) { }

    @Post('register')
    register(@Body() dto: CreateUserDTO): Promise<CreateUserDTO> {
        return this.AuthService.registerUser(dto)
    }
    @Post('login')
    login(@Body() dto: UserLoginDTO): Promise<AuthUserResponse> {
        return this.AuthService.loginUser(dto)
    }

}
