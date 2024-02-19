
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MoviePageComponent } from '../components/movie-page/movie-page.component';
import { MovieCardComponent } from '../components/movie_components/movie-card/movie-card.component';
import { MovieSearchComponent } from '../components/movie_components/movie-search/movie-search.component';
import { MovieSearchedCardComponent } from '../components/movie_components/movie-searched-card/movie-searched-card.component';
import { MovieLoadingComponent } from '../components/movie_components/movie-loading/movie-loading.component';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [MovieLoadingComponent,MoviePageComponent,MovieCardComponent,MovieSearchComponent,MovieSearchedCardComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: MoviePageComponent }
    ])
  ]
})
export class MovieModule { }
