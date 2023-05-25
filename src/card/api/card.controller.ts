import { Body, Controller, Get, Param, Post, Delete, UseGuards } from '@nestjs/common';
import { CardRepository } from '../../repository/repositories/card.repository';
import { Card } from 'src/entities/card.entity';
import { CardService } from '../service/card.service';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { CurrentUser } from 'common/errors/current-user-decorator';
import { CreateCardDTO } from './dto';
import { User } from 'src/entities/user.entity';

@Controller('card')
export class CardController {
    constructor(private readonly cardService: CardService,
        private readonly cardRepository: CardRepository,) { }

    @UseGuards(JwtAuthGuard)
    @Post('create')
    createCard(@Body() body: CreateCardDTO, @CurrentUser() currentUser: User) {
        const userId = currentUser.id;
        return this.cardService.createCard(body, userId);
    }


}