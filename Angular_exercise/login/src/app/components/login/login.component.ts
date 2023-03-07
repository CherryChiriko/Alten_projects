import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IResult, IUser } from 'src/app/interfaces/interfaces';
import { Result } from 'src/app/models/result.model';
import { User } from 'src/app/models/user.model';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public result = new Result( '', 500);
  public reactiveForm !: FormGroup;
  public user = new User('', '');

  constructor(private form: FormService, private snackBar: MatSnackBar){}

  ngOnInit() : void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(null),
      password: new FormControl(null)
    })
  }

  public login() : void {
    const val = this.reactiveForm.value;
    const body = new User( val.name, val.password );
    this.form.checkUser(body).subscribe(
      { next: (res)=> {
          this.result.status = 200
          this.result.message = "Login successful"
          this.user = res;
          this.snackBar.open(this.result.message, '', { duration: 2000 })
        },
        error: e => {
          this.result.status = e.status
          this.result.message = e.error
          this.snackBar.open(this.result.message, '', { duration: 2000 })
        }}
    )
  }
}
