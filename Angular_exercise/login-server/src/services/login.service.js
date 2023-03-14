import { UserService } from "./user.service.js";
import { Address } from "../models/address.model.js";
import { UserDTO } from "../models/user.dto.js";

export class LoginService {

  users = [];

  constructor( ) {    this.generateRandomUsers();  }

  generateRandomNumber(min, number_of_elements){
    return Math.floor(Math.random() * number_of_elements) + min
  }
  generateRandomUsers() {
    const userService = UserService.getInstance(); 
    const names = ['John', 'Mary', 'Tom', 'Samantha', 'Robert', 'Olivia', 'David', 'Marc'];
    const surnames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Garcia', 'Miller', 'Wu'];
    const countries = [
      'USA, Phoenix', 'Canada, Kingston', 'Mexico, Ciudad de Mexico', 'Brazil, Rio de Janeiro', 
      'Argentina, Junin', 'Japan, Kyoto', 'Vietnam, Hanoi', 'France, Marseille'];

    for (let i = 0; i < 41; i++) {

      const birth_day = this.generateRandomNumber(1,28);
      const birth_month = this.generateRandomNumber(1,12);
      const birth_year = this.generateRandomNumber(1922,100);
      const birthday = new Date(birth_year, birth_month, birth_day);
      const country = countries[this.generateRandomNumber(0,7)].split(', ');

      const address = new Address(
        `${country[0]}`, `${country[1]}`,
        `${this.generateRandomNumber(4,50)}th Street`,
        this.generateRandomNumber(1,100)
      )
      const userDto = new UserDTO({
        id: i,
        userName: `user${i}`,
        password: '123',
        name: names[this.generateRandomNumber(0,7)],
        surname: surnames[this.generateRandomNumber(0,7)],
        birthday: birthday,
        address: address
      });

      this.users.push( userService.createUser(userDto));
    }
  }

  getAll(){    return this.users;  }

  findUser(body) {
    const user = this.users.find(u => 
      u.userName === body.userName && u.password === body.password);
    return user;
  }

  getUser(id) {    return this.users.find(user => user.id === id);  }

}
