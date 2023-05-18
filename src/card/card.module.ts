import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card as Card } from 'src/entities/card.entity';
import { CardRepository } from '../repository/repositories/card.repository';
import { CardService } from './service/card.service';
import { CardController } from './api/card.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Card]),],
    providers: [CardService, CardRepository],
    controllers: [CardController],
    exports: [CardService, CardRepository],
})
export class CardModule { }