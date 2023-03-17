import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Result } from 'src/app/models/result.model';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public result = new Result( '', 500);
  public reactiveForm !: FormGroup;
  public user = new User();

  constructor(
    private loginService: LoginService, private snackBar: MatSnackBar,
    private route: Router){}

  ngOnInit() : void {
    this.reactiveForm = new FormGroup({
      userName: new FormControl(null),
      password: new FormControl(null)
    })
  }

  public login() : void {
    const val = this.reactiveForm.value;
    this.loginService.checkUser(val.userName, val.password).subscribe(
      { next: (res)=> {
          this.result.status = 200
          this.result.message = "Login successful"
          this.user = res;
          this.route.navigate(['/user/0'])   // Here it shouldn't be hardcoded
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
