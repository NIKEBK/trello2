import { Body, Controller, Get, Param, Post, Delete, UseGuards } from '@nestjs/common';
import { CommentRepository } from '../../repository/repositories/comment.repository';
import { Comment } from 'src/entities/comment.entity';
import { CommentService } from '../service/comment.service';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { CurrentUser } from 'common/errors/current-user-decorator';
import { User } from 'src/entities/user.entity';
import { CreateCommentDTO } from './dto';


@UseGuards(JwtAuthGuard)
@Controller('comment')
export class CommentController {
        constructor(private readonly commentService: CommentService,
            private readonly commentRepository: CommentRepository,) { }

    @Post('create')
    createCard(@Body() body: CreateCommentDTO, @CurrentUser() currentUser: User) {
        const userId = currentUser.id;
        return this.commentService.createComment(body, userId);
    }
}
