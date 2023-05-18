import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm"
import { User } from "./user.entity"
import { Card } from "./card.entity"


@Entity()
export class ColumnContent {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    columnName: string

    @ManyToOne(() => User, (user) => user.id)
    user: User

    @Column()
    userId: number

    @OneToMany(() => Card, (card) => card.id, {
        onDelete: 'CASCADE',
    })
    card: Card[];
}