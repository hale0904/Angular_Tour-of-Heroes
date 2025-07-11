import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedModule } from '../components/component.module';


@NgModule ({
    declarations: [LayoutComponent, HeaderComponent, SidebarComponent],
    imports: [CommonModule, RouterModule, SharedModule],
    exports: [LayoutComponent]
})

export class LayoutModule {}