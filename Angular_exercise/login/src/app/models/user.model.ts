export class User {
    userName: string;
    password: string;
    birthday?: string;

    constructor(userName: string, password: string, birthday?: string) {
      this.userName = userName;
      this.password = password;
      this.birthday = birthday;
    }
  }
