import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgIf, NgFor, UpperCasePipe,} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './shared/layout/layout.component';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';
import { MessagesComponent } from './shared/components/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    LayoutComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [
    NgIf,
    NgFor,
    UpperCasePipe,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
