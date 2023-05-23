import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { CreateUserDTO } from 'src/user/api/user.dto';
import { UserLoginDTO } from './auth.dto';
import { AuthUserResponse } from '../../response/response';

@Controller('auth')
export class AuthController {
    constructor(private readonly AuthService: AuthService) { }

    @Post('register')
    register(@Body() body: CreateUserDTO): Promise<CreateUserDTO> {
        return this.AuthService.registerUser(body)
    }
    @Post('login')
    login(@Body() body: UserLoginDTO): Promise<AuthUserResponse> {
        return this.AuthService.loginUser(body)
    }
}
