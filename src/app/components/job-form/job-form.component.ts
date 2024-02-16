
import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, AbstractControl, ValidatorFn } from '@angular/forms';
import { FormDataService } from 'src/app/services/form-data.service';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';
import { MinLengthValidator } from 'src/app/validators/minLength-validator';
import { customRequired } from 'src/app/validators/required-validator';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class JobFormComponent implements OnInit {
  jobForm!: FormGroup;
minLengthValidator:ValidatorFn = MinLengthValidator(5)
  constructor(private fb: FormBuilder,
     private formDataService: FormDataService,
     private sweetAlertService:SweetAlertService) { }

  ngOnInit(): void {
    this.jobForm = this.fb.group({
      jobs: this.fb.array([])
    });
    this.addNewJob();
  }

  addNewJob(): void {
    const jobGroup = this.formDataService.createJob(this.minLengthValidator, customRequired);
    this.formDataService.addPositionToJob(jobGroup);
    this.jobsArray.push(jobGroup);
    if(this.jobsArray.length > 1){
      this.sweetAlertService.addPositionOrJob('Job')
    }
  }
  

  removeJob(index: number): void {
    if (this.jobsArray.length > 1) {
      this.jobsArray.removeAt(index);
      this.sweetAlertService.removePositionOrJob('Job')
    } else {
      this.sweetAlertService.errorOnRemoveAlert('job')
    }
  }

  get jobsArray(): FormArray {
    return this.jobForm.get('jobs') as FormArray;
  }

  onSubmit(): void {
    console.log(this.jobForm.value);
this.sweetAlertService.sucessOnSubmitAlert()
  }

  addPosition(jobGroup: AbstractControl): void {
    if (jobGroup instanceof FormGroup) {
      this.formDataService.addPositionToJob(jobGroup);
      this.sweetAlertService.addPositionOrJob('position')
    }
  }
  
  removePosition(jobGroup: FormGroup | any, index: number,jobIndex:number): void {
    if(this.getPositions(jobIndex).length > 1){
      if (jobGroup instanceof FormGroup) {
        this.formDataService.removePositionFromJob(jobGroup, index);
        this.sweetAlertService.removePositionOrJob('Postion')
      }
    }else{
      this.sweetAlertService.errorOnRemoveAlert('position')
    }
  }


  getPositions(jobIndex: number): FormArray {
    const jobGroup = this.jobsArray.at(jobIndex) as FormGroup;
    return jobGroup.get('positions') as FormArray;
  }

  trackByFn(index: number, item: any): any {
    return index;
  }
}
