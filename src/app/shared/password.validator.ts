import { AbstractControl } from "@angular/forms";

 export function PasswordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const repassword = control.get('repassword');
    return password && repassword && password.value != repassword.value ?
    { 'misMatch': true} :
    null;
}