import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobFormComponent } from './components/job-form/job-form.component';
import { JobPositionFormComponent } from './components/jobsForm_components/job-position-form/job-position-form.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpInterceptorService } from './interseptors/http-interceptor';
import { MovieSearchComponent } from './components/movie_components/movie-search/movie-search.component';
import { MovieCardComponent } from './components/movie_components/movie-card/movie-card.component'
import { DateFormatPipe } from './pipes/date-format.pipe';
import { DatePipeComponent } from './components/date-pipe/date-pipe.component';
import { CalendarComponent } from './components/calendar_components/calendar/calendar.component';
import { CalendarPageComponent } from './components/calendar-page/calendar-page.component';
import { ComparisionComponent } from './components/comparision/comparision.component';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { MovieSearchedCardComponent } from './components/movie_components/movie-searched-card/movie-searched-card.component';
import { MovieLoadingComponent } from './components/movie_components/movie-loading/movie-loading.component';
import { FormComponent } from './components/comprasion_components/form/form.component';
import { ListComponent } from './components/comprasion_components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    JobFormComponent,
    JobPositionFormComponent,
    HeaderComponent,
    MovieSearchComponent,
    MovieCardComponent,
    DateFormatPipe,
    DatePipeComponent,
    CalendarComponent,
    CalendarPageComponent,
    ComparisionComponent,
    MoviePageComponent,
    MovieSearchedCardComponent,
    MovieLoadingComponent,
    FormComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
