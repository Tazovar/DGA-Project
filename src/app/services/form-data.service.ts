import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { customRequired } from '../validators/required-validator';
import { DateComparisonValidator } from '../validators/date-compresion.validator';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  constructor(private fb: FormBuilder) { }
createJob(minLengthValidator: ValidatorFn,customRequiredValidator:ValidatorFn): FormGroup {
  return this.fb.group({
    companyName: ['', [customRequiredValidator, minLengthValidator]],
    companyWebsite: ['',customRequiredValidator],
    companyDescription: ['',customRequiredValidator],
    positions: this.fb.array([])
  });
}

createPosition(customRequiredValidator: ValidatorFn): FormGroup {
  return this.fb.group({
    positionName: ['', customRequiredValidator],
    positionLevel: ['', customRequiredValidator],
    positionDescription: ['', customRequiredValidator],
    Date: this.fb.group({
      startDate: ['', [customRequiredValidator]],
      endDate: ['', [customRequiredValidator]]
    }, { validator: DateComparisonValidator('startDate', 'endDate') }) 
  });
}


  addPositionToJob(jobGroup: FormGroup): void {
    const positionGroup = this.createPosition(customRequired);
    this.positionsArray(jobGroup).push(positionGroup);
  }
  
  removePositionFromJob(jobGroup: FormGroup, index: number): void {
    this.positionsArray(jobGroup).removeAt(index);
  }

  private positionsArray(jobGroup: FormGroup): FormArray {
    return jobGroup.get('positions') as FormArray;
  }
}
