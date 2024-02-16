import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FirsMovie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl: string = 'https://online-movie-database.p.rapidapi.com/title/v2/find';

  constructor(private http: HttpClient) {}

  public getAllMovies(title: string, limit: number, paginationKey: number): Observable<FirsMovie> {
    const params = this.buildParams(title, limit, paginationKey);
    return this.http.get<FirsMovie>(this.apiUrl, { params }).pipe(
      catchError(this.handleError)
    );
  }

  public searchMovies(title: string, limit: number, paginationKey: number): Observable<FirsMovie> {
    const params = this.buildParams(title, limit, paginationKey);
    return this.http.get<FirsMovie>(this.apiUrl, { params }).pipe(
      catchError(this.handleError)
    );
  }

  private buildParams(title: string, limit: number, paginationKey: number): HttpParams {
    return new HttpParams()
      .set('title', title)
      .set('limit', limit.toString())
      .set('paginationKey', paginationKey.toString())
      .set('sortArg', 'moviemeter,asc');
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return throwError(error);
  }
}