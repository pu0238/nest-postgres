import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository, UpdateResult } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findOne(arg: any, options?: any): Promise<User> {
    return this.usersRepository.findOne(arg, options);
  }

  insert(user: User): Promise<InsertResult> {
    return this.usersRepository.insert(user);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  update(arg: any, entity: User): Promise<UpdateResult> {
    return this.usersRepository.update(arg, entity);
  }
}
