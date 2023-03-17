import { IAddress } from "../interfaces/interfaces";

export class Address {
  public state: string = '';
  public city: string = '';
  public street: string = '';
  public num ?: number;

  constructor() { }

  // public mapFromDTO(dto: IAddress): void {
  //   this.state = dto.state;
  //   this.city = dto.city;
  //   this.street = dto.street;
  //   this.num = dto.num;
  // }

  // public mapToDTO(): IAddress {
  //   return {
  //     state: this.state,
  //     city : this.city,
  //     street : this.street,
  //     num : this.num,
  //   }
  // }
}
