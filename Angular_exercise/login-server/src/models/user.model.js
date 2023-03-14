export class User {
    constructor(
      id, userName, password,
      birthday, name, surname,
      address) {
      
      this.id = id;
      this.userName = userName;
      this.password = password;

      this.name = name;
      this.surname = surname;
      this.birthday = birthday;
      this.address = address;
    }
  }
