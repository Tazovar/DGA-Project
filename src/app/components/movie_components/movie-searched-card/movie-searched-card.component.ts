import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-movie-searched-card',
  templateUrl: './movie-searched-card.component.html',
  styleUrls: ['./movie-searched-card.component.css']
})
export class MovieSearchedCardComponent {
@Input() searchResults: Movie[] = [];

}
