import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:3000/login/users';

  public checkUser(body: IUser): Observable<IUser>{
    return this.http.post<IUser>(this.url, body);
  }

  public getUserInfo(id: number): Observable<IUser>{
    return this.http.get<IUser>(`${this.url}/${id}`);
  }
}
