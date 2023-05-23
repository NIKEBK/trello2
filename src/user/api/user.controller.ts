import { Body, Controller, Get, Param, Post, Delete, UseGuards } from '@nestjs/common';
import { UserRepository } from '../../repository/repositories/user.repository';
import { User } from 'src/entities/user.entity';
import { UserService } from '../service/user.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDTO } from './user.dto';

@Controller('user')
export class UserController {
    @Get()
    public getExample(): string {
        return 'This route is protected and requires authentication.';
    }
    constructor(private readonly userRepository: UserRepository,
        private readonly userService: UserService,) {
    }
    @Post('create-user')
    createUsers(@Body() body: CreateUserDTO) {
        return this.userService.createUser(body)
    }
}