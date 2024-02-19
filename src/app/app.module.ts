import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material.module';
import { HttpInterceptorService } from './interseptors/http-interceptor';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { JobModule } from './modules/job.module';
import { MovieModule } from './modules/movie.module';
import { CalendarModule } from './modules/calendar.module';
import { ComparisonModule } from './modules/comparison.module';
import { PipeModule } from './modules/pipe.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    JobModule, 
    MovieModule, 
    CalendarModule, 
    ComparisonModule,
    PipeModule
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
