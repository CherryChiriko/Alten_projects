import { Address } from "./address.model.js";

export class User {

  constructor(user) {
    this.id = user.id;
    this.userName = user.userName;
    this.password = user.password;
    this.name = user.name;
    this.surname = user.surname;
    this.birthday = user.birthday;
    this.address = user.address ? new Address(
      user.address.state,
      user.address.city,
      user.address.street,
      user.address.num
    ) : undefined;
  }
}
