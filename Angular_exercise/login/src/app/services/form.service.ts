import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  public checkUser(body: IUser): Observable<IUser>{
    const url = 'http://localhost:3000/login/users';
    return this.http.post<IUser>(url, body);
  }
}
