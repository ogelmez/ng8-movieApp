import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { CaseStudyOptions } from '../case-study/options/factory';
import { CaseModel } from '../case-study/options/model';

@Injectable()
export class MoviesService {

  constructor(private httpService: HttpClient) { }

  url = 'http://localhost:3000/movies';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getMovies() {
    return this.httpService.get(this.url);
  }

  getMovieDetail(id: number) {
    return this.httpService.get(this.url + '/' + id).pipe(
      tap(_ => console.log(`fetched todo id=${id}`)),
      catchError(this.handleError(`getMovieDetail id=${id}`))
    );
  }
  addMovie (movie:CaseModel) {
   movie.id = null;
    return this.httpService.post(this.url, movie, this.httpOptions).pipe(
      tap(data => console.log('data')),
      catchError(this.handleError('addMovie'))
    );
  }

  updateMovie (movie){
    return this.httpService.put(this.url + '/' + movie.id, movie, this.httpOptions).pipe(
      tap(_ => console.log(movie)),
      catchError(this.handleError<any>('updateMovie'))
    );
  }
  deleteMovie (id) {
    console.log(id);
    return this.httpService.delete(this.url + '/' + id,this.httpOptions).pipe(
      catchError(this.handleError('deleteMovie'))
    );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any) => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };

}

}