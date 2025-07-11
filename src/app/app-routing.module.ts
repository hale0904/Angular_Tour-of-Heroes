import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './pages/p-heroes/heroes/heroes.component';
import { DashboardComponent } from './pages/p-heroes/dashboard/dashboard.component';
import { HeroDetailComponent } from './pages/p-heroes/hero-detail/hero-detail.component';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'heroes', component: HeroesComponent},
      {path: 'detail/:id', component: HeroDetailComponent}
    ]
  },
  { path: '', redirectTo: '/admin', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
