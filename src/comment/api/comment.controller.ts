import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { CommentRepository } from '../../repository/repositories/comment.repository';
import { Comment } from 'src/entities/comment.entity';
import { CommentService } from '../service/comment.service';

@Controller('comment')
export class CommentController { }

