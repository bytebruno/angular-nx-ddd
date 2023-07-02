import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadMovieRes } from '../entities/dto/loadMovieRes';

@Injectable({ providedIn: 'root' })
export class MoviesDataService {
  constructor(private http: HttpClient) {}

  private _apiUrl = 'https://www.omdbapi.com/';
  private _apiKey = '83513884';

  load(search: string): Observable<LoadMovieRes> {
    const params = new HttpParams()
      .set('apiKey', this._apiKey)
      .set('type', 'movie')
      .set('s', search);
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.get<LoadMovieRes>(this._apiUrl, { params, headers });
  }
}
