import { IAddress } from "../interfaces/address.interface";

export class Address {
  public state: string = '';
  public city: string = '';
  public street: string = '';
  public num ?: number;

  constructor() { }

  public mapFromDTO(addressDTO: IAddress): void {
    this.state = addressDTO.state;
    this.city = addressDTO.city;
    this.street = addressDTO.street;
    this.num = addressDTO.num;
  }

  public mapToDTO(): IAddress{
    return {
      state : this.state,
      city : this.city,
      street : this.street,
      num : this.num
    }
  }
}
