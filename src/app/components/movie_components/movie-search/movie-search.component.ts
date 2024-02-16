import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {
  searchQuery: string = '';
  @Input() disableButton: boolean = false; 

  @Output() searchEmitter: EventEmitter<string> = new EventEmitter();

  search(form: NgForm): void {
    if (form.valid) {
      this.searchEmitter.emit(this.searchQuery);
    }
  }
}
