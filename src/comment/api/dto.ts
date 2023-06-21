import { IsNumber, IsString, isString } from 'class-validator';

export class CreateCommentDTO {
    @IsString()
    commentText: string;

    @IsNumber()
    cardId: number;
}

export class UpdateCommentDTO {
    @IsString()
    commentText: string;

    @IsNumber()
    id: number;
}
