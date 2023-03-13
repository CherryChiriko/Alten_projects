import { Address } from "./address.model";
import { User } from "./user.model";

export class UserDTO {
  userName: string;
  password: string;
  name?: string;
  surname?: string;
  birthday?: Date;
  address?: Address;

  constructor(user: User) {
    this.userName = user.userName;
    this.password = user.password;
    this.name = user.name;
    this.surname = user.surname;
    this.birthday = user.birthday;
    this.address = user.address;
  }
}
