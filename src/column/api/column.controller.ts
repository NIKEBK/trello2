import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { ColumnRepository } from '../../repository/repositories/column.repository';
import { ColumnContent } from 'src/entities/column.entity';
import { ColumnService } from '../service/column.service';

@Controller('comment')
export class ColumnController { }
