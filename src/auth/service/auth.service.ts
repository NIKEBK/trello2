import { BadRequestException, Injectable } from '@nestjs/common';
import { AppError } from 'common/errors/errors';
import { CreateUserDTO } from 'src/user/api/user.dto';
import { UserService } from 'src/user/service/user.service';
import { UserLoginDTO } from '../api/auth.dto';
import * as bcrypt from "bcrypt";
import { TokenService } from '../../token/token.service';
import { AuthUserResponse } from '../../response/response';
import { UserRepository } from 'src/repository/repositories/user.repository';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly tokenService: TokenService,
        private readonly userRepository: UserRepository,
    ) { }

    async registerUser(dto: CreateUserDTO): Promise<CreateUserDTO> {
        const existUser = await this.userRepository.findUserByUserName(dto.userName)
        if (existUser) throw new BadRequestException(AppError.USER_EXIST)
        return this.userService.createUser(dto)
    }

    async loginUser(dto: UserLoginDTO): Promise<AuthUserResponse> {
        const existUser = await this.userRepository.findUserByUserName(dto.userName)
        if (!existUser) throw new BadRequestException(AppError.USER_NOT_EXIST)
        const validatePassword = await bcrypt.compare(dto.password, existUser.password)
        if (!validatePassword) throw new BadRequestException(AppError.WRONG_DATA)
        const userData = {
            userName: existUser.userName,
            id: existUser.id,
        }
        const token = await this.tokenService.generateJwtToken(userData)
        const user = await this.userRepository.publicUser(dto.userName)
        return { ...user, token }
    }

}
