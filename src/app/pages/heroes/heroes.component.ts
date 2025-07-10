import { Component } from '@angular/core';

import { Hero } from 'src/app/core/model/heroes/hero.model';
import { HeroService } from 'src/app/core/service/heroes/fetchAPI/heroes.service';
import { MessageService } from 'src/app/core/service/heroes/messages/messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent {
  
  selectedHero!: Hero;

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) {}

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void{
    this.getHeroes();
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }
}
