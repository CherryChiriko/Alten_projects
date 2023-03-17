import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IUser } from '../interfaces/interfaces';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:3000/login/users';

  public checkUser(userName: string, password: string): Observable<User>{
    const body = {userName: userName, password: password}
    return this.http.post<IUser>(this.url, body).pipe(map(userDTO => {
      const user = new User(userDTO.userName, userDTO.password);   //aggiungere altre proprietà
      // user.mapFromDTO(userDTO);
      return user;
    }));
  }

  public getUserInfo(id: number): Observable<IUser>{
    return this.http.get<IUser>(`${this.url}/${id}`);
  }


}


// in mapfromDTO dello user avrò mapfromDTO di address
