import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetAllUserCardsDTO } from 'src/card/api/dto';
import { Card } from 'src/entities/card.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CardRepository extends Repository<Card> {
    constructor(
        @InjectRepository(Card)
        private cardRepository: Repository<Card>,
    ) {
        super(
            cardRepository.target,
            cardRepository.manager,
            cardRepository.queryRunner,
        );
    }
    async getAllUserCards(dto: GetAllUserCardsDTO, userId: number): Promise<Card[]> {
        const allUserCards = await this.cardRepository.find({ where: { userId: userId } });
        return allUserCards
    }
    async findOneCard(id: number): Promise<Card> {
        const oneCard = await this.cardRepository.findOne({ where: { id: id } });
        return oneCard
    }
}