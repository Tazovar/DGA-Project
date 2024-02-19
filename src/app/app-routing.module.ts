import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/job.module').then(m => m.JobModule) },
  { path: 'movies', loadChildren: () => import('./modules/movie.module').then(m => m.MovieModule) },
  { path: 'calendar', loadChildren: () => import('./modules/calendar.module').then(m => m.CalendarModule) },
  { path: 'comparision', loadChildren: () => import('./modules/comparison.module').then(m => m.ComparisonModule) },
  { path: 'pipe', loadChildren: () => import('./modules/pipe.module').then(m => m.PipeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
