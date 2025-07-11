import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './shared/layout/layout.module';
import { DashboardModule } from './pages/p-heroes/dashboard/dashboard.module';
import { SharedModule } from './shared/components/component.module';
import { HeroesModule } from './pages/p-heroes/heroes/heroes.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    LayoutModule,
    SharedModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }