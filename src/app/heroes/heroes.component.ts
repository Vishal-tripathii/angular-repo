import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroInterface';
import { HEROES } from '../mock-heroesFile';
import { HeroService } from '../heroService/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {

  heroes = HEROES;
  selectedHero?: Hero;
  
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  ///-------------Service part-------------------///
  constructor(private heroService: HeroService) {}
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
