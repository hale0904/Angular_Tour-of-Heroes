import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

@NgModule ({
    declarations: [DashboardComponent],
    imports: [CommonModule, RouterModule, NgFor],
    exports: [DashboardComponent]
})

export class DashboardModule {}