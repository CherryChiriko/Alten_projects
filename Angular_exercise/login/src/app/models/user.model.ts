import { IUser } from 'src/app/interfaces/user.interface';
import { Address } from "./address.model";

export class User {
    public id: number = 0;
    public userName: string = '';
    public password: string = '';
    public name: string = '';
    public surname?: string;
    public birthday?: Date;
    public address?: Address;

    constructor() {}

    public mapFromDTO(userDTO: IUser): void {
      this.id = userDTO.id;
      this.userName = userDTO.userName;
      this.password = userDTO.password;
      this.name = userDTO.name;
      this.surname = userDTO.surname;
      this.birthday = userDTO.birthday;

      const address = new Address();
      if (userDTO.address) {address.mapFromDTO(userDTO.address)}
      this.address = address;
    }
  }
