import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgIf, NgFor, UpperCasePipe} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroesComponent } from "./heroes.component";
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";

@NgModule ({
    declarations: [HeroesComponent, HeroDetailComponent],
    imports: [
        CommonModule, 
        RouterModule, 
        NgFor,
        NgIf,
        UpperCasePipe,
        FormsModule
    ],
    exports: [HeroesComponent, HeroDetailComponent]
})

export class HeroesModule {}