import { Injectable } from '@nestjs/common';


@Injectable()
export class UsersService 
{
  getFirstName(): string {
    return 'First Name is: Manon';
  }
  
  getLastName(): string 
  {
    return 'Last Name is: Tucpas';
  }

  getBirth(): string{
    return 'Birth Date is: 13/07/1991';
  }

  getFullName(): string {
    return (this.getFirstName() + " " + this.getLastName());
  }
}
