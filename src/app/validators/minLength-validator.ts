import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function MinLengthValidator(minLength: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value as string;
    const trimmedValue: string = value.trim(); 
    if (trimmedValue && trimmedValue.replace(/' '/g, '').length < minLength) {
      return { 'minLength': { requiredLength: minLength, actualLength: trimmedValue.length } };
    }
    return null;
  };
}
