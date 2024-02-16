import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobFormComponent } from './components/job-form/job-form.component';
import { DatePipeComponent } from './components/date-pipe/date-pipe.component';
import { CalendarPageComponent } from './components/calendar-page/calendar-page.component';
import { ComparisionComponent } from './components/comparision/comparision.component';
import { MoviePageComponent } from './components/movie-page/movie-page.component';

const routes: Routes = [
  {path:'',component:JobFormComponent},
  {path:'movies',component:MoviePageComponent},
  {path:"pipe",component:DatePipeComponent},
  {path:"calendar",component:CalendarPageComponent},
  {path:"comparision",component:ComparisionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
