import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IForm } from '../interfaces/form.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: []
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

  ngOnInit(): void {    
  }
  constructor(private route: Router){}

  register( userForm: NgForm){
     this.successMessage = "User data registered successfully"
     this.route.navigate(['/home'])
  }
}
