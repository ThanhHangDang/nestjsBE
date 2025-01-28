import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userReponsitory: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userReponsitory.find();
  }

  find(id: number): Promise<User> {
    return this.userReponsitory.findOneBy({ id }) as any;
  }

  create(userData: Partial<User>) {
    const user = this.userReponsitory.create(userData);
    user.created_at = new Date();
    user.update_at = new Date();
    return this.userReponsitory.save(user);
  }

  async update(id: number, userData: Partial<User>) {
    userData.update_at = new Date();
    await this.userReponsitory.update(id, userData);
    return this.userReponsitory.findOneBy({ id }) as any;
  }

  async delete(id: number) {
    const user = (await this.userReponsitory.findOneBy({ id })) as any;
    await this.userReponsitory.delete(id);
    return user;
  }
}
