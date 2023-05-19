import { BadRequestException, Injectable } from '@nestjs/common';
import { AppError } from 'common/errors/errors';
import { CreateUserDTO } from 'src/user/api/user.dto';
import { UserService } from 'src/user/service/user.service';

@Injectable()
export class AuthService {
    constructor(private readonly UserService: UserService) { }

    async registerUser(dto: CreateUserDTO): Promise<CreateUserDTO> {
        const existUser = await this.UserService.findUserByUserName(dto.userName)
        if (existUser) throw new BadRequestException(AppError.USER_EXIST)
        return this.UserService.createUser(dto)
    }

}
