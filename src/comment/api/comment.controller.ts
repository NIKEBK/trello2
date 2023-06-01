import { Body, Controller, Get, Param, Post, Delete, UseGuards, Put } from '@nestjs/common';
import { CommentRepository } from '../../repository/repositories/comment.repository';
import { Comment } from 'src/entities/comment.entity';
import { CommentService } from '../service/comment.service';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { CurrentUser } from 'common/errors/current-user-decorator';
import { User } from 'src/entities/user.entity';
import { CreateCommentDTO, UpdateCommentDTO } from './dto';


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

    @Delete('delete/:id')
    async deleteComment(@Param('id') id: number): Promise<string> {
        await this.commentService.deleteComment(id)
        return `Your comment with ${id} id was deleted`
    }

    @Put('edit/:id')
    async updateCommentText(@Param('id') id: number,
        @Body() body: UpdateCommentDTO,) {
        return await this.commentService.updateComment({
            commentText: body.commentText,
            id: id,
        })
    }
}
