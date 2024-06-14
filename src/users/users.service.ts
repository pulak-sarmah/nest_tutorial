import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
      role: 'ADMIN',
      email: 'johndoe@gmail.com',
    },
    {
      userId: 2,
      username: 'chris',
      password: 'changeme',
      role: 'STAF',
      email: 'john@gmail.com',
    },
    {
      userId: 3,
      username: 'john',
      password: 'changeme',
      role: 'INTERN',
      email: 'doe@gmail.com',
    },
    {
      userId: 4,
      username: 'john',
      password: 'changeme',
      role: 'STAF',
      email: 'js@gmail.com',
    },
    {
      userId: 5,
      username: 'john',
      password: 'changeme',
      role: 'INTERN',
      email: 'jd@gmail.com',
    },
  ];

  async findAll(role?: 'INTERN' | 'STAF' | 'ADMIN') {
    if (role) {
      if (!['INTERN', 'STAF', 'ADMIN'].includes(role)) {
        throw new NotFoundException('Role not found');
      }
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  async findOne(userId: number) {
    const user = this.users.find((user) => user.userId === userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async create(createUserDto: CreateUserDto) {
    const id =
      [...this.users].sort((a, b) => b.userId - a.userId)[0].userId + 1;
    const newUser = { userId: id, ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }

  async update(userId: number, updateUserDto: UpdateUserDto) {
    const userIndex = this.users.findIndex((user) => user.userId === userId);
    this.users[userIndex] = { ...this.users[userIndex], ...updateUserDto };
    return this.users[userIndex];
  }

  async delete(userId: number) {
    const userIndex = this.users.findIndex((user) => user.userId === userId);
    const user = this.users[userIndex];
    this.users.splice(userIndex, 1);
    return user;
  }
}
