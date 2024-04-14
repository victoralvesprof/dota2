import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { HeroListService } from './heroes-list.service';
import { Hero } from '../../models/hero.model';
import { mockHeroes } from '../../mocks/hero.mock';

describe('HeroListService', () => {
  let service: HeroListService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HeroListService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it(`#${HeroListService.name} should be created`, () => {
    expect(service).toBeTruthy();
  });

  it(`#${HeroListService.prototype.getAllHeroes.name} should get all heroes`, () => {
    const url = `${service.apiUrl}/heroes`;
    let result: Array<Hero> = [];

    service.getAllHeroes().subscribe((res) => {
      result = res;
    });

    const request = httpMock.expectOne(url);
    request.flush(mockHeroes);
    expect(request.request.method).toBe('GET');
    expect(result).toEqual(mockHeroes);
  });
});