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

export class GetColumnDTO {
    @IsString()
    columnName: string;
}

export class GetOneColumnDTO {
    @IsString()
    columnName: string;

    @IsNumber()
    userId: number;
}