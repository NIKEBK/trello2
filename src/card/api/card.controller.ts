import { Body, Controller, Get, Param, Post, Delete, UseGuards, Patch, Put } from '@nestjs/common';
import { CardRepository } from '../../repository/repositories/card.repository';
import { Card } from 'src/entities/card.entity';
import { CardService } from '../service/card.service';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { CurrentUser } from 'common/current-user-decorator';
import { CreateCardDTO, GetAllUserCardsDTO, UpdateCardNameDTO } from './dto';
import { User } from 'src/entities/user.entity';

@UseGuards(JwtAuthGuard)
@Controller('card')
export class CardController {
    constructor(private readonly cardService: CardService,
        private readonly cardRepository: CardRepository,) { }


    @Post('create')
    async createCard(@Body() body: CreateCardDTO, @CurrentUser() currentUser: User): Promise<Card> {
        const userId = currentUser.id;
        return this.cardService.createCard(body, userId);
    }

    @Get('cards')
    async getAllUserCard(dto: GetAllUserCardsDTO, @CurrentUser() currentUser: User): Promise<Card[]> {
        const userId = currentUser.id;
        return this.cardRepository.getAllUserCards(dto, userId)
    }

    @Delete('delete/:id')
    async deleteColumn(@Param('id') id: number): Promise<string> {
        await this.cardService.deleteCard(id)
        return `Your card with ${id} id was deleted`
    }

    @Put('update/:id')
    async updateCardName(@Param('id') id: number, @Body() body: UpdateCardNameDTO): Promise<UpdateCardNameDTO> {
        return this.cardService.updateCard({
            cardName: body.cardName,
            id: id,
        })
    }
}