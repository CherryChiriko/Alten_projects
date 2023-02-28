import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IResult, IUser } from 'src/app/interfaces/interfaces';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  result : IResult = {
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

  public login() : void { 
    const val = this.reactiveForm.value;
    const body: IUser = { userName: val.name, password: val.password };
    this.form.checkUser(body).then(result => {
      {console.log(result); result? this.result = result : null}
    })
  }
}
