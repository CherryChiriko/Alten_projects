import { IAddress } from "./address.interface";

export interface IUser{
  id: number;
  userName: string;
  password: string;
  name : string;
  surname ?: string;
  birthday ?: Date;
  address ?: IAddress;
}

