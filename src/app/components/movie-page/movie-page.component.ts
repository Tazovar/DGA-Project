import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MovieService } from 'src/app/services/movie.service';
import { FirsMovie, Movie } from 'src/app/interfaces/movie';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css'],
})
export class MoviePageComponent implements OnInit, OnDestroy {
  movies$!: Observable<FirsMovie>;
  pending = false;
  moviesLimit = 4;
  moviesPageIndex = 0;
  totalMatches = 0;
  searchQuery = "";
  searchResults: Movie[] = [];
  disabledSearchButton = false;
  searchSubscription: Subscription = new Subscription();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private movieService: MovieService,private sweetAlertService:SweetAlertService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.movies$ = this.movieService.getAllMovies("t", this.moviesLimit, this.moviesPageIndex);

    this.movies$.subscribe(response => {
      this.totalMatches = response.totalMatches;
    });
  }

  onPageChange(event: PageEvent): void {
    this.moviesPageIndex = event.pageIndex;
    this.moviesLimit = event.pageSize;

    if (this.searchResults.length > 0) {
      this.search();
    } else {
      this.loadMovies();
    }
  }

  searchEmitterSubscriber(event: string) {
    this.searchQuery = event;
    this.search();
  }

  search(): void {
    this.pending = true;
    this.searchResults = [];
    this.disabledSearchButton = true;

    if (this.searchQuery.trim() !== '') {
      this.searchSubscription.unsubscribe();
      this.searchSubscription = this.movieService.searchMovies(this.searchQuery, this.moviesLimit, this.moviesPageIndex).subscribe((results: FirsMovie) => {
        if (results.results) {
          this.searchResults = results.results;
          this.totalMatches = results.totalMatches;
          this.sweetAlertService.successMovieSearchAlert()

        } else {
          this.searchResults = [];
          this.sweetAlertService.errorMoviesSearchAlert(this.searchQuery);

        }
        this.disabledSearchButton = false;
        this.pending = false;
      });
    } else {
      this.searchResults = [];
      this.disabledSearchButton = false;
    }
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }
  
  trackByFn(index: number, item: any) {
    return item.id; 
  }  
}
