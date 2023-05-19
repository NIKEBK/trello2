import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from 'src/user/api/user.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly AuthService: AuthService) { }

    @Post('register')
    register(@Body() dto: CreateUserDTO): Promise<CreateUserDTO> {
        return this.AuthService.registerUser(dto)
    }

}
