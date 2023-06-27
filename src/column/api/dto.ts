import { IsNumber, IsString } from 'class-validator';

export class CreateColumnDTO {
    @IsNumber()
    userId: number;

    @IsString()
    name: string;
}

// export class UpdateColumnDTO {
//     @IsString()
//     name: string;
// }

export class GetColumnDTO {
    @IsString()
    name: string;
}

export class GetOneColumnDTO {
    @IsNumber()
    userId: number;

    @IsString()
    name: string;
}