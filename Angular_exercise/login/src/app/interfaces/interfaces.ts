import { Address } from "../models/address.model";

export interface IUser{
  id: number;
  userName: string;
  password: string;
  name : string;
  surname ?: string;
  birthday ?: Date;
  address ?: IAddress;
}

export interface IResult{
  resultMessage: string;
  success: boolean;
}

export interface IAddress{
  state: string;
  city: string;
  street: string;
  num ?: number;
}
