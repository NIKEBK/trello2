import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from 'src/entities/comment.entity';
import { CommentRepository as CommentRepository } from '../repository/repositories/comment.repository';
import { CommentService } from './service/comment.service';
import { CommentController } from './api/comment.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Comment]),],
    providers: [CommentService, CommentRepository],
    controllers: [CommentController],
    exports: [CommentService, CommentRepository],
})
export class CommentModule { }