import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

export const urlValidator = (control: AbstractControl): ValidationErrors | null => {
    const url = /^https?:\/\/(?!\/)/.test(control.value);
    if (url){
      return null;
    }
    return {url: true};
};

@Directive({
  selector: '[appUrlValid]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ValidateImgUrlDirective,
    multi: true
  }]
})
export class ValidateImgUrlDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return urlValidator(control);
  }
}
