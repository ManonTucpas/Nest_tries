import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  //As we need a website with one page i think we only use one '@Get' and put all our core functions in here
  // as navig URL's is : http://localhost:3000/users/firstname 
  @Get('firstname')
  getFirstName(): string {
    return this.UsersService.getFirstName();
  }

  // as navig URL's is : http://localhost:3000/users/lastname 
  @Get('lastname')
  getLastName(): string {
    return this.UsersService.getLastName();
  }
  
  // as navig URL's is : http://localhost:3000/users/birthdate 
  @Get('birthdate')
  getBirth(): string {
    return this.UsersService.getBirth();
  }

  // as navig URL's is : http://localhost:3000/users/fullname
  @Get('fullname')
  getFullName(): string {
    return this.UsersService.getFullName();
  }
}
