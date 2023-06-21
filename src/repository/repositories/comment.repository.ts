import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from 'src/entities/comment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommentRepository extends Repository<Comment> {
    constructor(
        @InjectRepository(Comment)
        private commentRepository: Repository<Comment>,
    ) {
        super(
            commentRepository.target,
            commentRepository.manager,
            commentRepository.queryRunner,
        );
    }
    async findOneComment(id: number): Promise<Comment> {
        const oneComment = await this.commentRepository.findOne({ where: { id: id } });
        return oneComment
    }
}