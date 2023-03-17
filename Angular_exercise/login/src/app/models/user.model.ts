import { IUser } from 'src/app/interfaces/interfaces';
// import { Address } from "./address.model";

export class User {
    public userName: string = '';
    public password: string = '';
    public name: string = '';
    public surname?: string;
    public birthday?: Date;
    // public address?: Address;

    constructor() {}

    public mapFromDTO(userDTO: IUser): void {
      this.userName = userDTO.userName;
      this.password = userDTO.password;
      this.name = userDTO.name;
      this.surname = userDTO.surname;
      this.birthday = userDTO.birthday;
    }
  }
