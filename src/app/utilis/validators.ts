import { AbstractControl } from "@angular/forms";

export class MyValidators{

  static isPriceValid(control: AbstractControl){
    const value = control.value;
    if (value < 100){
      return {price_invalide:true};
    }
    return null;

  }
}
