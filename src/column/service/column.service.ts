import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateColumnDTO, GetColumnDTO, UpdateColumnDTO } from '../api/dto';
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
    async deleteColumn(id: number): Promise<boolean> {
        const column = await this.columnRepository.findOne({ where: { id: id } })
        await this.columnRepository.remove(column)
        return true;
    }
    async updateColumnName(columnName: string, updateName) {
        await this.columnRepository.update({ columnName }, updateName)
        return updateName
    }
}

