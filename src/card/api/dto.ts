import { IsNumber, IsString } from 'class-validator';

export class CreateCardDTO {
    @IsString()
    cardName: string;

    @IsNumber()
    columnId: number;

    // @IsNumber()
    // userId: number;

}