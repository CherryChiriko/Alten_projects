import { Address } from "../models/address.model";

export interface IAddress{
  state: string;
  city: string;
  street: string;
  num ?: number;
}
