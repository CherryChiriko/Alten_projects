import { IUser } from 'src/app/interfaces/user.interface';
import { Address } from "./address.model";

export class User {
    public id?: number;
    public userName: string = '';
    public password: string = '';
    public name: string = '';
    public surname?: string;
    public gender: 'male' | 'female' = 'female';
    public birthday?: Date;
    public address?: Address;

    constructor() {}

    public mapFromDTO(userDTO: IUser): void {
      this.id = userDTO.id;
      this.userName = userDTO.userName;
      this.password = userDTO.password;
      this.name = userDTO.name;
      this.surname = userDTO.surname;
      this.gender = userDTO.gender;
      this.birthday = userDTO.birthday;

      const address = new Address();
      if (userDTO.address) {address.mapFromDTO(userDTO.address)}
      this.address = address;
    }

    public mapToDTO() :IUser{
      return {
        id: this.id,
        userName : this.userName,
        password: this.password,
        name: this.name,
        surname: this.surname,
        gender: this.gender,
        birthday: this.birthday,
        address: this.address? this.address.mapToDTO() : this.address
      }
    }
  }
