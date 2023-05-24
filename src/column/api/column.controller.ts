import { Body, Controller, Get, Param, Post, Delete, UseGuards, Req } from '@nestjs/common';
import { ColumnRepository } from '../../repository/repositories/column.repository';
import { ColumnContent } from 'src/entities/column.entity';
import { ColumnService } from '../service/column.service';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { CreateColumnDTO } from './dto';
import { CurrentUser } from 'common/errors/current-user-decorator';
import { User } from 'src/entities/user.entity';

@Controller('column')
export class ColumnController {
    constructor(private readonly columnService: ColumnService,
        private readonly columnRepository: ColumnRepository,) { }

    @UseGuards(JwtAuthGuard)
    @Post('create')
    createColumn(@Body() body: CreateColumnDTO, @CurrentUser() currentUser: User) {
        const userId = currentUser.id;
        return this.columnService.createColumn(body, userId);

    }

}
