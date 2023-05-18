import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository extends Repository<User> {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {
        super(
            userRepository.target,
            userRepository.manager,
            userRepository.queryRunner,
        );
    }
    // async createUser(userName: string): Promise<User> {
    //     return this.userRepository.save({ userName: userName })
    // }
    async getAllUsers(): Promise<User[]> {
        const users = await this.userRepository.find({
            select: ['userName', 'id'],
        });
        return users;
    }
}