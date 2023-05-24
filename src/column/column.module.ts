import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColumnContent } from 'src/entities/column.entity';
import { ColumnRepository } from '../repository/repositories/column.repository';
import { ColumnService } from './service/column.service';
import { ColumnController } from './api/column.controller';
import { UserRepository } from 'src/repository/repositories/user.repository';
import { UserModule } from 'src/user/user.module';

@Module({
    imports: [TypeOrmModule.forFeature([ColumnContent]),],
    providers: [ColumnService, ColumnRepository,],
    controllers: [ColumnController],
    exports: [ColumnService, ColumnRepository,],
})
export class ColumnModule { }