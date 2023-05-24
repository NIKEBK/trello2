import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateColumnDTO } from '../api/dto';
import { ColumnContent } from 'src/entities/column.entity';
import { ColumnRepository } from 'src/repository/repositories/column.repository';
import { AppError } from 'common/errors/errors';
import { UserRepository } from 'src/repository/repositories/user.repository';


@Injectable()
export class ColumnService {
    constructor(private readonly columnRepository: ColumnRepository,
        //private readonly userRepository: UserRepository
    ) {
    }
    async createColumn(dto: CreateColumnDTO, userId: number): Promise<ColumnContent> {
        const createdColumn = await this.columnRepository.save({ columnName: dto.columnName, userId: userId });
        return createdColumn
    }
}

