import { IsNumber, IsString, isNumber } from 'class-validator';


export class UpdateColumnResponseDTO {
    @IsString()
    columnName: string;
}

export class UpdateColumnDTO {
    @IsNumber()
    id: number;

    @IsString()
    columnName: string;
}