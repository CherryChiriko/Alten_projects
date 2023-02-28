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

  // getUsersParams(data: string[]) {
  //   const url = 'http://localhost:3000/login/users';
  //   const queryParams = { userName: data[0], password: data[1] };
  //   return this.http.get(url, { params: queryParams });
  // }

  // findUser(users: any, userName: string, password: string) {
  //   const user = users.find((u: any) => u.userName === userName && u.password === password);
  //   return user? 
  //   {resultMessage: 'Login successful', success: true} :
  //   {resultMessage: 'Incorrect username or password', success: false} ;
  // }

  // async checkUser(data: string[]) {
  // const url = 'http://localhost:3000/login/users';
  // const [userName, password] = data;

  // let result = {resultMessage: '', success: false};

  // const users$ = this.http.get(url);

  // await lastValueFrom(users$.pipe(
  //   tap(users => result = this.findUser(users, userName, password))
  // ));
  // return result;
  // }

  public findUser(users: any, body: IUser) {
    const user = users.find((u: any) => 
    u.userName === body.userName && u.password === body.password);
    return user? 
    {resultMessage: 'Login successful', success: true} :
    {resultMessage: 'Incorrect username or password', success: false} ;
  }

  public async checkUser(body: IUser){
    const url = 'http://localhost:3000/login/users';
    let result = {resultMessage: '', success: false};

    const users$ = this.http.post(url, body);

    await lastValueFrom(users$.pipe(
      tap(users => result = this.findUser(users, body))
    ));
    return result;
  }
}



  // await this.http.get(url).pipe(
  //   tap(users => result = this.findUser(users, userName, password))
  // ).toPromise();
  
  // return result;