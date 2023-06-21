import { Body, Controller, Get, Param, Post, Delete, UseGuards, Patch, Req } from '@nestjs/common';
import { UserRepository } from '../../repository/repositories/user.repository';
import { User } from 'src/entities/user.entity';
import { UserService } from '../service/user.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDTO, UpdateUserDTO } from './user.dto';
import { JwtAuthGuard } from 'src/guards/jwt-guard';

@Controller('user')
export class UserController {
    constructor(private readonly userRepository: UserRepository,
        private readonly userService: UserService,) {
    }
    @UseGuards(JwtAuthGuard)
    @Patch()
    updateUser(@Body() body: UpdateUserDTO, @Req() request) {
        const user = request.user
        return this.userService.updateUser(user.userName, body)
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async deleteUser(@Param('id') id: number): Promise<string> {
        await this.userService.deleteUser(id)
        return `User ${id} was deleted`
    }

}