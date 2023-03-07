export class LoginService {

  users = [];

  constructor() {
    for (let i=0; i<41; i++){
      this.users.push(
        {
          userName: `user${i}`,
          password: '123',
          birthday: '12/03/2000'
          // `${Math.getRandomInt(29)}/${Math.getRandomInt(13)}/${this.getRandomIntinRange(1930, 2023)}`
        }
      )
    }
  }

  getAll(){    return this.users;  }

  findUser(body) {
    const user = this.users.find(u => 
      u.userName === body.userName && u.password === body.password);
    return user;
  }

  getRandomIntinRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
    // The maximum is exclusive and the minimum is inclusive
  }
}
