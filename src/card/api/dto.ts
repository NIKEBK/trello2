import { IsNumber, IsString } from 'class-validator';

export class CreateCardDTO {
    @IsString()
    cardName: string;

    @IsNumber()
    columnId: number;
}

export class GetAllUserCardsDTO {
    @IsString()
    cardName: string;

    @IsNumber()
    columnId: number;
}

export class UpdateCardNameDTO {
    @IsString()
    cardName: string;

    @IsNumber()
    columnId: number;
}