import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export default class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getAllUsers();
  }

  @Get('addresses')
  getAddresses() {
    return this.usersService.getAllAddresses();
  }
}
