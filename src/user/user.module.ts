import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { UserRepository } from '../repository/repositories/user.repository';
import { UserService } from './service/user.service';
import { UserController } from './api/user.controller';
import { SequelizeModule } from "@nestjs/sequelize"

@Module({
    imports: [TypeOrmModule.forFeature([User]),],
    providers: [UserService, UserRepository],
    controllers: [UserController],
    exports: [UserService, UserRepository],
})
export class UserModule { }