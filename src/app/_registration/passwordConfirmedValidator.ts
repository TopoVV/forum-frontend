import { AbstractControl } from '@angular/forms';

export function passwordConfirmedValidator(control : AbstractControl) : {[key : string] : any} | null {
  const password : string = control.get('password').value;
  const confirmation : string = control.get('confirmPassword').value;
  console.log(confirmation);
  if (password === '' || confirmation === '' ||confirmation === password) { 
    return null;
  } else {
    return { 'passwordNotConfirmed' : true};
  }
}