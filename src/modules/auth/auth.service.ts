import { BadRequestException, Injectable } from '@nestjs/common';
import { AppError } from 'common/errors/errors';
import { CreateUserDTO } from 'src/user/api/user.dto';
import { UserService } from 'src/user/service/user.service';
import { UserLoginDTO } from './dto/auth.dto';
import * as bcrypt from "bcrypt";
import { TokenService } from '../token/token.service';
import { AuthUserResponse } from './response/response';

@Injectable()
export class AuthService {
    constructor(
        private readonly UserService: UserService,
        private readonly TokenService: TokenService
    ) { }

    async registerUser(dto: CreateUserDTO): Promise<CreateUserDTO> {
        const existUser = await this.UserService.findUserByUserName(dto.userName)
        if (existUser) throw new BadRequestException(AppError.USER_EXIST)
        return this.UserService.createUser(dto)
    }

    async loginUser(dto: UserLoginDTO): Promise<AuthUserResponse> {
        const existUser = await this.UserService.findUserByUserName(dto.userName)
        if (!existUser) throw new BadRequestException(AppError.USER_NOT_EXIST)
        const validatePassword = await bcrypt.compare(dto.password, existUser.password)
        if (!validatePassword) throw new BadRequestException(AppError.WRONG_DATA)
        const token = await this.TokenService.generateJwtToken(dto.userName)
        return { ...existUser, token }
    }

}
