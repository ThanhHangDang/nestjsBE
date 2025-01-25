import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
// import { DatabaseService } from 'src/db/database.service';

@Injectable()
export class UserService {
    // constructor(private readonly db: DatabaseService){}
    constructor(
        @InjectRepository(User)
        private readonly userReponsitory: Repository<User>
    ){}

    findAll(): Promise<User[]>{
        return this.userReponsitory.find()
    }

    create(userData: Partial<User>) {
        const user = this.userReponsitory.create(userData)
        return user;
    }
}
