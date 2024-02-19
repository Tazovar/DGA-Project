
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JobFormComponent } from '../components/job-form/job-form.component';
import { JobPositionFormComponent } from '../components/jobsForm_components/job-position-form/job-position-form.component';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [JobFormComponent,JobPositionFormComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: JobFormComponent }
    ])
  ]
})
export class JobModule { }
