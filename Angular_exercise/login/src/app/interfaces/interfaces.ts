import { Address } from "../models/address.model";

export interface IUser{
    userName: string;
    password: string;
    name ?: string;
    surname ?: string;
    birthday ?: Date;
    address ?: Address;
}

export interface IResult{
    resultMessage: string;
    success: boolean;
}
