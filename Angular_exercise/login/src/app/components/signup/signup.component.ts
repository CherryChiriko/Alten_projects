import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Result } from 'src/app/models/result.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  public result = new Result( '', 500);
  public reactiveForm !: FormGroup;

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
            this.route.navigate(['/user', res.id])
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


