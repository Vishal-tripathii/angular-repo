import { Injectable } from '@angular/core';
import { Hero } from '../heroInterface'; // importing the Hero interfce
import { HEROES } from '../mock-heroesFile'; // impotiing the HEROES class which has actual dataList
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getHeroes(): Hero[] { // getHeroes is a function taking "Hero" type values only
    return HEROES; // here, the data from HEROES file is takes into service and is displayed from here only
  }
}
