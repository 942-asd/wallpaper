import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { paperes } from './paper';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
     const paperes = [
      { id: 1, name: '晴天☀ ',},
      { id: 2, name: '雨天🌧',},
      { id: 3, name: '多云☁', },
      { id: 4, name: '雨天🌧',},
      { id: 5, name: '暴雨🌧',},
      { id: 6, name: '晴天☀',},
    ];
    return {paperes};
  }

  // Overrides the genId method to ensure that a paper always has an id.
  // If the paperes array is empty,
  // the method below returns the initial number (11).
  // if the paperes array is not empty, the method below returns the highest
  // paper id + 1.
  genId(paperes: paperes[]): number {
    return paperes.length > 0 ? Math.max(...paperes.map(paper => paper.id)) + 1 : 6;
  }
}