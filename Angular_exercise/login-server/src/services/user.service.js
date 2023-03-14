import { User } from "../models/user.model.js";

export class UserService {
  static _instance;

  static getInstance() {
    if (!UserService._instance) {
      UserService._instance = new UserService();
    }
    return UserService._instance;
  }

  constructor() {  }
  createUser(userDto) {
    return new User(
      userDto.id,
      userDto.userName,
      userDto.password,
      userDto.birthday,
      userDto.name,
      userDto.surname,
      userDto.address
    );}
}
