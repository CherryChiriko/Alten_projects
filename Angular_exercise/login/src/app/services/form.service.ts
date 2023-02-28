import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IUser } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  public async checkUser(body: IUser): Promise<any>{
    const url = 'http://localhost:3000/login/users';
    let result: any;

    const users$ = this.http.post(url, body);
    await lastValueFrom(users$.pipe(
      tap(res => result = res)
    ));
    return result;
  }
}