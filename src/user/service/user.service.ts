import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../repository/repositories/user.repository';
import { User } from 'src/entities/user.entity';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcrypt'
import { CreateUserDTO } from '../api/user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private readonly userRepository: UserRepository) {
    }
    async deleteUser(userId: number): Promise<boolean> {
        await this.userRepository.delete(userId);
        return true;
    }
    async hashPassword(password) {
        return bcrypt.hash(password, 10)
    }
    async createUser(dto): Promise<CreateUserDTO> {
        dto.password = await this.hashPassword(dto.password)
        await this.userRepository.create(dto)
        return dto
    }
}