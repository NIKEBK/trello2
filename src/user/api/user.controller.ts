import { Body, Controller, Get, Param, Post, Delete, UseGuards } from '@nestjs/common';
import { UserRepository } from '../../repository/repositories/user.repository';
import { User } from 'src/entities/user.entity';
import { UserService } from '../service/user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
@UseGuards(AuthGuard())
export class UserController {
    @Get()
    public getExample(): string {
        return 'This route is protected and requires authentication.';
    }
    //export class UserController {
    // constructor(private readonly userRepository: UserRepository,
    //     private readonly userService: UserService,) {
    // }
    // @Post('create')
    // async createUser(@Body() body: { userName: string }) {
    //     return this.userRepository.createUser(body.userName)
    // }
    // @Get(':userId')
    // async showOneUser(@Param('userId') userId: number): Promise<User> {
    //     return await this.userRepository.findOne({
    //         where: { id: userId },
    //         select: ['userName', 'id'],
    //     });
    // }
    // @Delete('delete/:userId')
    // async deleteUser(@Param('userId') userId: number): Promise<string> {
    //     await this.userService.deleteUser(userId);
    //     return `User with id ${userId} was deleted`;
    // }
    // @Get()
    // showAllUsers(): Promise<User[]> {
    //     return this.userRepository.getAllUsers();
    // }
}