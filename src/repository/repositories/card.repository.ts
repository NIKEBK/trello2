import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
}