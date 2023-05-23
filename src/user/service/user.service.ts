import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepository } from '../../repository/repositories/user.repository';
import { User } from 'src/entities/user.entity';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcrypt'
import { CreateUserDTO } from '../api/user.dto';
import { AppError } from 'common/errors/errors';

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private readonly userRepository: UserRepository) {
    }
    async hashPassword(password: string) {
        return bcrypt.hash(password, 10)
    }
    async createUser(dto: CreateUserDTO): Promise<User> {
        dto.password = await this.hashPassword(dto.password);
        const createdUser = this.userRepository.create(dto);
        await this.userRepository.save(createdUser);
        return createdUser;
    }

}