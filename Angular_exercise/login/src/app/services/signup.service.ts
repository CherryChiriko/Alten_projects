import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor() { }
  public addElementToFormGroup(form: FormGroup, category: string, array: string[]): void{
    array.forEach(item => {
      let abstractControl : AbstractControl = form.get(category)!;
      if(abstractControl instanceof FormGroup){
        (<FormGroup>abstractControl).addControl(item, new FormControl(null));
      }
    });
  }
}
