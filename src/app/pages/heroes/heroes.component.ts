import { Component } from '@angular/core';

import { HEROES } from 'src/app/core/service/heroes/mock_heroes.service';
import { Hero } from 'src/app/core/model/heroes/hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
