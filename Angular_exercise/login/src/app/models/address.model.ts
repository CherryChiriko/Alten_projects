export class Address {
  state: string;
  city: string;
  street: string;
  num ?: number;

  constructor(state: string, city: string, street: string, num ?: number) {
    this.state = state;
    this.city = city;
    this.street = street;
    this.num = num
  }
}
