import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Characters } from '../models/characters.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private url = `${environment.url_api}/people`;

  constructor(private http: HttpClient) { }

  /* getAllCharacters(): Observable<Characters[]> {
    return this.http
      .get(`${this.url}`)
      .pipe(map((response: any) => response.results as Characters[]));
  } */

  getAllCharacters(page: number): Observable<any> {
    return this.http.get(`${this.url}/?page=${page}`);
  }
}
