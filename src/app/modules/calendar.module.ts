
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CalendarPageComponent } from '../components/calendar-page/calendar-page.component';
import { CalendarComponent } from '../components/calendar_components/calendar/calendar.component';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [CalendarPageComponent,CalendarComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: CalendarPageComponent }
    ])
  ]
})
export class CalendarModule { }
