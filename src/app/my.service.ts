import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Model } from './model';


@Injectable({ providedIn: 'root' })
export class Service {
  private url = '/api/things';

  constructor(private http: HttpClient) { }

  getData(): Observable<Model[]> {
    return this.http.get<Model[]>(this.url)
      .pipe(
        tap(_ => console.log('fetching')),
        catchError((err) => {
          console.log('err:', err);
          return of();
        })
        
      );
  }
}
