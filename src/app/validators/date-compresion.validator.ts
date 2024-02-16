import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms';

export function DateComparisonValidator(startDate: string, endDate: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control && control.get(startDate) && control.get(endDate)) {
      const startDateValue: Date = control.get(startDate) !.value;
      const endDateValue: Date = control.get(endDate) !.value;
      const currentDate: Date = new Date();
      const currentYear: number = currentDate.getFullYear();
const error =  {
    'invalidDate': true
  };
      if (!isValidDate(startDateValue) || !isValidDate(endDateValue)) {
        control.setErrors(error)
        return error
      }
      if (startDateValue > endDateValue || startDateValue.getFullYear() > currentYear || endDateValue.getFullYear() > currentYear) {
        control.setErrors({'dateComparison':true})
        return {
          'dateComparison': true
        };
      }
      
    }

    return null;
  };
}

function isValidDate(date: Date | null): boolean {
  return date instanceof Date && !isNaN(date.getTime());
}
