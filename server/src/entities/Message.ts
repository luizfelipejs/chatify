import { Column, PrimaryColumn, UpdateDateColumn, Generated, Entity, ManyToOne } from 'typeorm'
import { Channel } from './Channel'
import { User } from './User'

@Entity()
export class Message {
  @PrimaryColumn()
  @Generated('uuid')
  id: string

  @Column()
  content: string

  @ManyToOne(type => User, user => user.Messages)
  sender: User

  @ManyToOne(type => Channel, channel => channel.Messages)
  channel: Channel

  @Column()
  @UpdateDateColumn()
  createdAt: Date
}
