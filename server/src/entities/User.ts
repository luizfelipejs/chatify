import { Entity, PrimaryColumn, Column, Generated, UpdateDateColumn, ManyToMany, OneToMany } from 'typeorm'
import { Channel } from './Channel'
import { Message } from './Message'

@Entity()
export class User {
    @PrimaryColumn()
    @Generated('uuid')
    id: string

    @Column()
    username: string

    @Column()
    urlImage: string

    @Column({ unique: true })
    email: string

    @Column({ unique: true })
    password: string

    @ManyToMany(type => Channel, channel => channel.Users)
    channels: Channel[]

    @OneToMany(type => Message, message => message.sender)
    messages: Message[]

    @Column({ default: 'token' })
    token: string

    @Column({ default: 'date' })
    expires: Date

    @Column({ type: 'datetime' })
    @UpdateDateColumn()
    createdAt: Date
}
