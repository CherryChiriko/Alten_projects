import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  url: string = 'http://localhost:3000/login/users';
  constructor(private http: HttpClient) { }
  public addElementToFormGroup(form: FormGroup, category: string, array: string[]): void{
    array.forEach(item => {
      let abstractControl : AbstractControl = form.get(category)!;
      if(abstractControl instanceof FormGroup){
        (<FormGroup>abstractControl).addControl(item, new FormControl(null));
      }
    });
  }
  public addUser(user : User): void{
    console.log("I arrived here")
    this.http.post<User>(`${this.url}/${user.id}`, user);
  }
}
