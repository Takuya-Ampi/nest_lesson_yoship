import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UsersService {
  users :CreateUserDto[] = []
  create(user: CreateUserDto) :void{
    this.users.push(user)
  }
  findAll() :CreateUserDto[]{
    return this.users
  }
}
