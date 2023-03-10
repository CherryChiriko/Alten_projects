export class User {
    userName: string;
    password: string;
    name?: string;
    surname?: string;
    birthday?: string;
    address?: string;

    constructor(
      userName: string, password: string,
      birthday?: string, name?: string, surname?: string,
      address?: string) {

      this.userName = userName;
      this.password = password;

      this.name = name;
      this.surname = surname;
      this.birthday = birthday;
      this.address = address;
    }
  }
