import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Hero } from './hero';


@Injectable({ providedIn: 'root' })
export class HeroService {
  private heroesUrl = '/api/heroes';

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => console.log('fetching')),
        catchError((err) => {
          console.log('err:', err);
          return of();
        })
        
      );
  }
}
