import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-customer-input',
  templateUrl: './customer-input.component.html',
  styleUrls: ['./customer-input.component.scss']
})
export class CustomerInputComponent  {
  isChecked = false;
  income = new FormControl('', [
    Validators.required,
    Validators.email,
    userIDValidator()
  ]);
  onChange(){
  this.isChecked = !this.isChecked
  }
  buttonState() {
    return !this.isChecked
  }
}

function userIDValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = control.value.length < 10 ;
    return forbidden ? {'forbiddenId': {value: control.value}} : null;
  };

}
