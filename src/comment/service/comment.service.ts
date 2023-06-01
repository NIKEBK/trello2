import { Injectable } from '@nestjs/common';
import { CommentRepository } from 'src/repository/repositories/comment.repository';
import { CreateCommentDTO } from '../api/dto';
import { Comment } from 'src/entities/comment.entity';


@Injectable()
export class CommentService {
    constructor(private readonly commentRepository: CommentRepository,) {
    }
    async createComment(dto: CreateCommentDTO, userId: number): Promise<Comment> {
        const createdComment = await this.commentRepository.save({ commentText: dto.commentText, cardId: dto.cardId, userId: userId });
        return createdComment
    }
}
