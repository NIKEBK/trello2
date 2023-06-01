import { IsNumber, IsString } from 'class-validator';

export class CreateCommentDTO {
    @IsString()
    commentText: string;

    // @IsNumber()
    // userId: number;

    @IsNumber()
    cardId: number;

}
