
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DatePipeComponent } from '../components/date-pipe/date-pipe.component';
import { DateFormatPipe } from '../pipes/date-format.pipe';
import { SharedModule } from './shared.module';
@NgModule({
  declarations: [DatePipeComponent,DateFormatPipe],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: DatePipeComponent }
    ])
  ]
})
export class PipeModule { }
