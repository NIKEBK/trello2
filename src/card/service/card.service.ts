import { Injectable } from '@nestjs/common';
import { CardRepository } from 'src/repository/repositories/card.repository';
import { CreateCardDTO } from '../api/dto';
import { Card } from 'src/entities/card.entity';


@Injectable()
export class CardService {
    constructor(private readonly cardRepository: CardRepository,
    ) {
    }
    async createCard(dto: CreateCardDTO, userId: number): Promise<Card> {
        const createdColumn = await this.cardRepository.save({ cardName: dto.cardName, columnId: dto.columnId, userId: userId });
        return createdColumn
    }

}
