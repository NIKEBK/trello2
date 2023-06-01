import { Body, Controller, Get, Param, Post, Delete, UseGuards, Req, Patch, BadRequestException } from '@nestjs/common';
import { ColumnRepository } from '../../repository/repositories/column.repository';
import { ColumnContent } from 'src/entities/column.entity';
import { ColumnService } from '../service/column.service';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { CreateColumnDTO, GetColumnDTO, UpdateColumnDTO } from './dto';
import { CurrentUser } from 'common/errors/current-user-decorator';
import { User } from 'src/entities/user.entity';
import { AppError } from 'common/errors/errors';

@UseGuards(JwtAuthGuard)
@Controller('column')
export class ColumnController {
    constructor(private readonly columnService: ColumnService,
        private readonly columnRepository: ColumnRepository,) { }

    @Post('create')
    createColumn(@Body() body: CreateColumnDTO, @CurrentUser() currentUser: User) {
        const userId = currentUser.id;
        return this.columnService.createColumn(body, userId);
    }

    @Get('myColumns')
    getAllColumns(dto: GetColumnDTO, @CurrentUser() currentUser: User) {
        const userId = currentUser.id;
        return this.columnRepository.getAllColumns(dto, userId)
    }

    @Delete('delete/:id')
    async deleteColumn(@Param('id') id: number): Promise<string> {
        await this.columnService.deleteColumn(id)
        return `Your column with ${id} id was deleted`
    }

    @Patch('patch/:id')
    async updateColumnName(@Param('id') id: number, @CurrentUser() currentUser: User, @Body() updateName: string,): Promise<any> {
        const column = await this.columnRepository.findOneColumn(id)
        const user = currentUser.id
        if (!column) {
            throw new BadRequestException(AppError.COLUMN_NOT_EXIST)
        }
        if (column.userId !== user) {
            throw new BadRequestException(AppError.NOT_COLUMN_OWNER)
        }
        return this.columnService.updateColumnName(column.columnName, updateName)
    }
}
