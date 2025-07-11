// Import thư viện
import { Component, OnInit } from '@angular/core';

// Import file trong folder
import { Hero } from 'src/app/core/model/heroes/hero.model';
import { HeroService } from 'src/app/core/service/heroes/fetchAPI/heroes.service';

// Hiển thị danh sách Hero nổi bật
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}