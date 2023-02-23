import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormService } from './services/form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';

  // resultMessage: string = '';
  // success: boolean = false;
  result = {
    resultMessage : '',
    success : false
  }

  reactiveForm !: FormGroup;

  constructor(private form: FormService){}

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      name: new FormControl(null), 
      password: new FormControl(null)
    })    
  }

  login(){
    const val = this.reactiveForm.value;
    const data = [val.name, val.password];
    this.form.checkUser(data).then(result => {
      result? this.result = result: null;
    });
  }

}
