import { BadRequestException, Injectable } from '@nestjs/common';
import { CommentRepository } from 'src/repository/repositories/comment.repository';
import { CreateCommentDTO, UpdateCommentDTO } from '../api/dto';
import { Comment } from 'src/entities/comment.entity';
import { AppError } from 'common/errors/errors';


@Injectable()
export class CommentService {
    constructor(private readonly commentRepository: CommentRepository,) {
    }
    async createComment(dto: CreateCommentDTO, userId: number): Promise<Comment> {
        const createdComment = await this.commentRepository.save({ commentText: dto.commentText, cardId: dto.cardId, userId: userId });
        return createdComment
    }

    async deleteComment(id: number): Promise<boolean> {
        const comment = await this.commentRepository.findOne({ where: { id: id } })
        await this.commentRepository.delete(comment)
        return true;
    }

    async updateComment(dto: UpdateCommentDTO,): Promise<UpdateCommentDTO> {
        const id = await this.commentRepository.findOneComment(dto.id);
        const comment = await this.commentRepository.findOne({
            where: { id: id.id },
        });
        if (!comment) {
            throw new BadRequestException(AppError.COMMENT_NOT_EXIST);
        }
        await this.commentRepository.update(id.id, {
            commentText: dto.commentText,
        });
        return await this.commentRepository.findOne({
            where: { id: id.id },
        });
    }

}

