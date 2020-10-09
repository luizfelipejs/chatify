import { Entity, UpdateDateColumn, PrimaryColumn, Generated, ManyToMany, Column, JoinTable, OneToMany } from 'typeorm'
import { Message } from './Message'
import { User } from './User'

@Entity()
export class Channel {
  @PrimaryColumn()
  @Generated('uuid')
  id: string

  @ManyToMany(type => User, user => user.channels)
  @JoinTable()
  users: User[]

  @OneToMany(type => Message, message => message.channel)
  messages: Message[]

  @Column()
  @UpdateDateColumn()
  createdAt: Date
}
