import { IsNumber, IsString } from 'class-validator';

export class CreateCardDTO {

    @IsNumber()
    id: number;

    @IsString()
    name: string;
}

export class GetAllUserCardsDTO {
    @IsNumber()
    id: number;

    @IsString()
    name: string;
}

export class UpdateCardNameDTO {
    @IsNumber()
    id: number;

    @IsString()
    cardName: string;

}