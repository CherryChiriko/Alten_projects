import { IUser } from '../interfaces/interfaces'

export class LoginService {

  private users : IUser[] = [];

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

  public getAll() : IUser[]{    return this.users;  }

  public findUser(users: IUser[], body: IUser) : Object{
    const user = users.find(u => 
      u.userName === body.userName && u.password === body.password);
    return user ? 
      { success: true, message: 'Login successful' } :
      { success: false, message: 'Incorrect username or password' };
    }

}
