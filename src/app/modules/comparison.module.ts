import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComparisionComponent } from '../components/comparision/comparision.component';
import { FormComponent } from '../components/comprasion_components/form/form.component';
import { ListComponent } from '../components/comprasion_components/list/list.component';
import { MaterialModule } from './material.module';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [ComparisionComponent,FormComponent,ListComponent],
  imports: [
    SharedModule,
    MaterialModule,
    RouterModule.forChild([
      { path: '', component: ComparisionComponent }
    ])
  ]
})
export class ComparisonModule { }
