import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { RegisterUserDTO, UserLoginDTO } from './auth.dto';
import { AuthUserResponse } from './auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('register')
    register(@Body() body: RegisterUserDTO): Promise<RegisterUserDTO> {
        return this.authService.registerUser(body)
    }
    @Post('login')
    login(@Body() body: UserLoginDTO): Promise<AuthUserResponse> {
        return this.authService.loginUser(body)
    }
}
