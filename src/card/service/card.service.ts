import { BadRequestException, Injectable } from '@nestjs/common';
import { CardRepository } from 'src/repository/repositories/card.repository';
import { CreateCardDTO, UpdateCardNameDTO } from '../api/dto';
import { Card } from 'src/entities/card.entity';
import { AppError } from 'common/errors/errors';


@Injectable()
export class CardService {
    constructor(private readonly cardRepository: CardRepository,
    ) {
    }
    async createCard(dto: CreateCardDTO, userId: number): Promise<Card> {
        const createdCard = await this.cardRepository.save({ cardName: dto.name, columnId: dto.id, userId: userId });
        return createdCard
    }

    async deleteCard(id: number): Promise<boolean> {
        const card = await this.cardRepository.findOne({ where: { id: id } })
        await this.cardRepository.delete(card)
        return true;
    }

    async updateCard(dto: UpdateCardNameDTO,): Promise<UpdateCardNameDTO> {
        const card = await this.cardRepository.findOneCard(dto.id);
        if (!card) {
            throw new BadRequestException(AppError.CARD_NOT_EXIST);
        }
        await this.cardRepository.update(card.id, {
            cardName: dto.cardName
        });
        return this.cardRepository.findOne({
            where: { id: card.id },
        });
    }
}
