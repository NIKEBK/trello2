import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { Comment } from "./comment.entity"
import { ColumnContent } from "./column.entity"


@Entity()
export class Card {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    cardName: string

    @ManyToOne(() => ColumnContent, (column) => column.id)
    column: ColumnContent

    @Column()
    columnId: number

    @OneToMany(() => Comment, (comment) => comment.id, {
        onDelete: 'CASCADE',
    })
    comment: Comment[];

}