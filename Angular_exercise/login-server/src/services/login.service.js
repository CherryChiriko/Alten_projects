

export class LoginService {

  users = [];

  constructor() {
    this.users = [
      {
        userName: 'dog',
        password: 'dog123'
      },
      {
        userName: 'cat',
        password: 'cat456'
      }
    ]
  }

  getAll(){    return this.users;  }

  findUser(body) {
    const user = this.users.find(u => 
      u.userName === body.userName && u.password === body.password);
    return user ? 
      { success: true, message: 'Login successful' } :
      { success: false, message: 'Incorrect username or password' };
    }
}
