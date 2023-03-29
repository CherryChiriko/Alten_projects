import { Address } from 'src/app/models/address.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Result } from 'src/app/models/result.model';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';
import { SignupService } from 'src/app/services/signup.service';
import { IUser } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  public result = new Result( '', 500);
  public registerForm !: FormGroup;
  private gender : boolean = true;

  constructor(
    private loginService: LoginService, private signupService: SignupService,
    private snackBar: MatSnackBar, private route: Router ){}

    ngOnInit() : void {
      this.registerForm = new FormGroup({
        userName: new FormControl(null),
        password: new FormControl(null),
        name: new FormControl(null),
        surname: new FormControl(null),
        birthday: new FormControl(null),
        address: new FormGroup({})
      })

      let addressKeys : string[] = Object.keys(new Address())
      addressKeys.push('number')
      this.signupService.addElementToFormGroup(this.registerForm, 'address', addressKeys)
    }

    public toggleGender(){ this.gender = !this.gender}
    public register() : void {
      const val = this.registerForm.value;
      let newUser : IUser = {
        name: val.name,
        surname: val.surname,
        userName: val.userName,
        password: val.password,
        gender: this.gender? 'female' : 'male',
        birthday: val.birthday,
        address: val.address
      }
      console.log(newUser)
      // this.loginService.checkUser(val.userName, val.password).subscribe(
      //   { next: ()=> {
      //       this.result.status = 505
      //       this.result.message = "User already registered"
      //       this.snackBar.open(this.result.message, '', { duration: 2000 })
      //     },
      //     error: ()=> {
      //       this.result.status = 200
      //       this.result.message = "User successfully registered"
      //       this.route.navigate(['/login'])
      //       this.snackBar.open(this.result.message, '', { duration: 2000 })
      //     }}
      // )
      const user = new User();
      user.mapFromDTO(newUser)
      this.signupService.addUser(user);
      this.registerForm.reset();
    }
}


