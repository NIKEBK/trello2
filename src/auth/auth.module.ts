import { Module } from '@nestjs/common';
import { AuthController } from './api/auth.controller';
import { AuthService } from './service/auth.service';
import { UserModule } from 'src/user/user.module';
import { TokenModule } from '../token/token.module';

@Module({
    imports: [UserModule, TokenModule],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule { }
