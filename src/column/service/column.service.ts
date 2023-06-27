import { Injectable } from '@nestjs/common';
import { CreateColumnDTO } from '../api/dto';
import { ColumnContent } from 'src/entities/column.entity';
import { ColumnRepository } from 'src/repository/repositories/column.repository';
import { UpdateColumnDTO, UpdateColumnResponseDTO } from './dto';



@Injectable()
export class ColumnService {
    constructor(private readonly columnRepository: ColumnRepository,
    ) {
    }
    async createColumn(dto: CreateColumnDTO): Promise<ColumnContent> {
        const createdColumn = await this.columnRepository.save({ columnName: dto.name, userId: dto.userId });
        return createdColumn
    }
    async deleteColumn(id: number): Promise<boolean> {
        const column = await this.columnRepository.findOne({ where: { id: id } })
        await this.columnRepository.remove(column)
        return true;
    }
    async updateColumnName(dto: UpdateColumnDTO): Promise<UpdateColumnDTO> {
        await this.columnRepository.update(dto.id, { columnName: dto.columnName })
        const update = await this.columnRepository.findOne({ where: { id: dto.id } })
        console.log(dto.id);
        console.log(update);
        return await this.columnRepository.findOne({
            where: { id: update.id }
        })

    }

}