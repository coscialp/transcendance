import { Inject, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/user/user.entity";
import { UsersRepository } from "src/user/user.repository";
import { UserService } from "src/user/user.service";
import { EntityRepository, Repository } from "typeorm";
import { Channel } from "./channel.entity";

@EntityRepository(Channel)
export class ChannelsRepository extends Repository<Channel> {
    constructor(
        @InjectRepository(UsersRepository) private readonly usersRepository: UsersRepository,
        ) {
        super();
    }

    async getChannel(): Promise<Channel[]> {
        const query = this.createQueryBuilder('channel')
        .leftJoinAndSelect('channel.creator', 'creator')
        .leftJoinAndSelect('channel.admin', 'admin')
        .leftJoinAndSelect('channel.userConnected', 'userConnected')
        .leftJoinAndSelect('channel.messages', 'messages')
    
        const channels = await query.getMany();
    
        return channels;
      }

    async createChannel(user: User, name: string, password: string, userService: UserService): Promise<void> {
        const currUser = await userService.getUserById(user.id);
        
        const channel: Channel = this.create({
            name,
            password,
            creator: currUser,
            messages: [],
            admin: [],
            userConnected: [],
        })

        channel.admin.push(currUser);
        channel.userConnected.push(currUser);

    
        currUser.channels.push(channel);
        currUser.channelsAdmin.push(channel);
        currUser.channelsConnected.push(channel);

        try {
            await this.save(channel);
            await this.usersRepository.save(currUser);
        } catch (e) {
            console.log(e.code);
        }
    }

    async joinChannel(user: User, channel: Channel) {
        channel.userConnected.push(user);
        user.channelsConnected.push(channel);

        try {
            this.save(channel)
            this.usersRepository.save(user);
        } catch (e) {
            console.log(e.code);
        }
    }
}