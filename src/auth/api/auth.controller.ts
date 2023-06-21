import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { CreateUserDTO } from 'src/user/api/user.dto';
import { UserLoginDTO } from './auth.dto';
import { AuthUserResponse } from '../../response/response';
import { JwtAuthGuard } from 'src/guards/jwt-guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('register')
    register(@Body() body: CreateUserDTO): Promise<CreateUserDTO> {
        return this.authService.registerUser(body)
    }
    @Post('login')
    login(@Body() body: UserLoginDTO): Promise<AuthUserResponse> {
        return this.authService.loginUser(body)
    }

    @UseGuards(JwtAuthGuard)
    @Post('test')
    test() {
        return true
    }

}
