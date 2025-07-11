// Import thư viện
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Import file trong folder project
import { Hero } from 'src/app/core/model/heroes/hero.model';
import { HEROES } from '../data/mock_heroes.data';
import { MessageService } from '../messages/messages.service';

// Quản lý logic liên quan đến dữ liệu Hero
@Injectable({ providedIn: 'root' })
export class HeroService {

  // Constructor & Inject services
  constructor(private messageService: MessageService) { }

  // Lấy danh sách tất cả Hero
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  // Lấy Hero theo id
  getHero(id: string): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}