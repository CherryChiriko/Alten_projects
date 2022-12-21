import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { IForm } from '../interfaces/form.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  successMessage: string = ''
  user: IForm = {
    name: '',
    surname: '',
    email: '',
    password: ''
  }
  rePassword !: string;

  constructor(private route: Router){}

  reactiveForm !: FormGroup;
  ngOnInit() {
    this.reactiveForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]), 
      surname: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      email: new FormControl(null, [Validators.required, Validators.maxLength(30),
        Validators.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")
      ]),
      password: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(60)]),
      rePassword: new FormControl(null, [Validators.required])
    })    
  }
  register(){
    this.successMessage = "User data registered successfully"
    this.route.navigate(['/home'])
 }

//  pswValidation(control : FormControl){
//   const password: string = control?.get("password").value; 
//   const confirmPassword: string = control?.get("rePassword").value; 
    
  // if (control != null && control.value != this.reactiveForm.get(password)){
  //   return {pswInvalid : true};
  // }
  // return null;
//  }

}
