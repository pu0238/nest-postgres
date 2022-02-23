import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UUID } from './dto/uuid.dto';
import { User } from './user.entity';
import { CreateUser } from './dto/createUser.dto';
import { InsertResult, UpdateResult } from 'typeorm';
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  getUserById(@Param() param: UUID): Promise<User> {
    return this.userService.findOne(param.id);
  }

  @Patch(':id')
  updateUserById(
    @Param() param: UUID,
    @Body() body: CreateUser,
  ): Promise<UpdateResult> {
    const user: User = {
      ...body,
    };
    return this.userService.update({ id: param.id }, user);
  }

  @Post()
  createUser(@Body() body: CreateUser): Promise<InsertResult> {
    const user: User = {
      ...body,
    };
    return this.userService.insert(user);
  }

  @Delete(':id')
  removeUserById(@Param() param: UUID): Promise<void> {
    return this.userService.remove(param.id);
  }
}
