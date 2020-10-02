import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { forkJoin, Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Films } from '../models/films.interface';
import { Characters } from '../models/characters.interface';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  private url = `${environment.url_api}/films`;

  constructor(private http: HttpClient) {}

  getAllFilms(): Observable<Films[]> {
    return this.http
      .get(`${this.url}`)
      .pipe(map((response: any) => response.results as Films[]));
  }

  getFilmByTitle(title: string): Observable<Films[]> {
    return this.http
      .get(`${this.url}/?search=${title}`)
      .pipe(map((response: any) => response.results as Films[]));
  }

  getCharactersByFilm(charactersUrl: string[]): Observable<Characters[]> {
    return forkJoin(charactersUrl.map((url: string) => this.getCharacter(url)));
  }

  getCharacter(url: string): Observable<Characters> {
    return this.http
      .get(url)
      .pipe(map((response: any) => response as Characters));
  }
}
