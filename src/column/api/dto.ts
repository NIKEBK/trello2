import { IsNumber, IsString } from 'class-validator';

export class CreateColumnDTO {
    @IsString()
    columnName: string;

    @IsNumber()
    userId: number;
}

export class UpdateColumnDTO {
    @IsString()
    columnName: string;
}