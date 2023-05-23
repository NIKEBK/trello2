import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Unique } from "typeorm"
import { Comment } from "./comment.entity"
import { ColumnContent } from "./column.entity"


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @Unique(['userName'])
    userName: string

    @Column()
    password: string

    @OneToMany(() => Comment, (comment) => comment.user, {
        onDelete: 'CASCADE',
    })
    comment: Comment[];
    @OneToMany(() => ColumnContent, (column) => column.user, {
        onDelete: 'CASCADE',
    })
    column: ColumnContent[];
}