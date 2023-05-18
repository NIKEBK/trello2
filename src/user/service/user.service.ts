import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../repository/repositories/user.repository';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {
    }
    async deleteUser(userId: number): Promise<boolean> {
        await this.userRepository.delete(userId);
        return true;
    }
}