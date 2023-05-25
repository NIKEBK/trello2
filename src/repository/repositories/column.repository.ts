import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetColumnDTO, GetOneColumnDTO } from 'src/column/api/dto';
import { ColumnContent } from 'src/entities/column.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ColumnRepository extends Repository<ColumnContent> {
    constructor(
        @InjectRepository(ColumnContent)
        private columnRepository: Repository<ColumnContent>,
    ) {
        super(
            columnRepository.target,
            columnRepository.manager,
            columnRepository.queryRunner,
        );
    }
    async getAllColumns(dto: GetColumnDTO, userId: number): Promise<any> {
        const allColumns = await this.columnRepository.find({ where: { userId: userId } });
        return allColumns
    }
    async findOneColumn(id: number): Promise<ColumnContent> {
        const oneColumn = await this.columnRepository.findOne({ where: { id: id } });
        return oneColumn
    }
}