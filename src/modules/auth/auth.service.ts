import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/service/user.service';

@Injectable()
export class AuthService {
    constructor(private readonly UserService: UserService) { }

    //async registerUsers(dto: CreateUserDTO) {

}

//}