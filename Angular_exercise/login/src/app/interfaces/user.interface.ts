import { IAddress } from "./address.interface";

export interface IUser{
  id ?: number;
  userName: string;
  password: string;
  name : string;
  surname ?: string;
  gender?: 'male' | 'female'
  birthday ?: Date;
  address ?: IAddress;
}

