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

  getAll() {    return this.users;  }
  findUser(userName, password) {
    const user = users.find(u => u.userName === userName && u.password === password);
    if (user) {
      res.status(200).json({ success: true, message: 'Login successful' });
    } else {
      res.status(401).json({ success: false, message: 'Incorrect username or password' });
    }
  }

}
