import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Hero } from '../../models/hero.model';

@Injectable({
  providedIn: 'root',
})
export class HeroListService {
  readonly apiUrl = 'https://api.opendota.com/api';

  constructor(private http: HttpClient) {}

  getAllHeroes(): Observable<Array<Hero>> {
    return this.http.get<Array<Hero>>(`${this.apiUrl}/heroes`);
  }
}