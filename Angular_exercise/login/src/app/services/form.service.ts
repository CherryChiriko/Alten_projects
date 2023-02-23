import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

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

  findUser(users: any, userName: string, password: string) {
    const user = users.find((u: any) => u.userName === userName && u.password === password);
    return user? 
    {resultMessage: 'Login successful', success: true} :
    {resultMessage: 'Incorrect username or password', success: false} ;
  }

  async checkUser(data: string[]) {
  const url = 'http://localhost:3000/login/users';
  const [userName, password] = data;

  let result = {resultMessage: '', success: false};

  await this.http.get(url).pipe(
    tap(users => result = this.findUser(users, userName, password))
  ).toPromise();
  
  return result;
  // if (result !== '') {
  //   return result;
  // } else {
  //   throw new Error('Incorrect username or password');
  // }
}
}


 // checkUser(data: string[]){
  //   const url = 'http://localhost:3000/login/users';
  //   const [userName, password] = data;

  //   this.http.get(url).subscribe(users => 
  //     console.log(this.findUser(users, userName, password)));
    
  //   // return this.findUser(users, userName, password);
  //   return ''
  // }