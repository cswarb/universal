import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Model } from './model';
import { makeStateKey, TransferState } from '@angular/platform-browser';


@Injectable({ providedIn: 'root' })
export class Service {
  private url = '/api/things';
  private _key = makeStateKey('Service:getData');

  constructor(private http: HttpClient, private transferState: TransferState) { }

  getData(): Observable<Model[]> {
    const data = this.transferState.get<any>(this._key, undefined);

    if(!data) {
      return this.http.get<Model[]>(this.url)
      .pipe(
        tap(data => {
          console.log(data, 'fetching');
          this.transferState.set<any>(this._key, data);
        }),
        catchError((err) => {
          console.log('err:', err);
          return of([]);
        })
      );
    };

    return of(data);
  }
}
