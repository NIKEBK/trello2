import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "./user.entity"
import { Card } from "./card.entity"

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    commentText: string

    @ManyToOne(() => User, (user) => user.id)
    user: User

    @Column()
    userId: number

    @ManyToOne(() => Card, (card) => card.id)
    card: Card

    @Column()
    cardId: number
}