import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepository } from '../../repository/repositories/user.repository';
import { User } from 'src/entities/user.entity';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcrypt'
import { CreateUserDTO, UpdateUserDTO } from '../api/user.dto';
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
    async updateUser(userName: string, dto: UpdateUserDTO) {
        await this.userRepository.update({ userName }, dto)
        return dto
    }
    async deleteUser(userName: string): Promise<boolean> {
        const user = await this.userRepository.findOne({ where: { userName: userName } })
        await this.userRepository.remove(user)
        return true;
    }
}