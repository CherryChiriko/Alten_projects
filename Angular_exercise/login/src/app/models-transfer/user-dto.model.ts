import { IUser } from 'src/app/interfaces/user.interface';
// import { Address } from "./address.model";

export class User {
    public id: number = 0;
    public userName: string = '';
    public password: string = '';
    public name: string = '';
    public surname?: string;
    public birthday?: Date;
    // public address?: Address;

    constructor() {}

    public mapToDTO(){

    }
  }
