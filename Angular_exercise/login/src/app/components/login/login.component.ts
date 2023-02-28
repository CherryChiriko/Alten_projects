import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IUser } from 'src/app/interfaces/interfaces';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  result = {
    resultMessage : '',
    success : false
  }

  reactiveForm !: FormGroup;

  constructor(private form: FormService){}

  ngOnInit() : void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(null), 
      password: new FormControl(null)
    })    
  }

  login() : void{
    const val = this.reactiveForm.value;
    // const data = [val.name, val.password];
    // this.form.checkUser(data).then(result => {
    //   result? this.result = result: null;
    // });
    const body: IUser = { userName: val.name, password: val.password };
    this.form.checkUser(body).then(result => {
      result? this.result = result : null
    })
    // return this.http.post(url, body);
  }
}
