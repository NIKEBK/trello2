import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { CardRepository } from '../../repository/repositories/card.repository';
import { Card } from 'src/entities/card.entity';
import { CardService } from '../service/card.service';

@Controller('comment')
export class CardController { }
