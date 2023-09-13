import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../lbd/lbd-chart/lbd.module';

import { translatorLayoutRoutes } from './translator-layout.routing';

import { HomeComponent } from '../home/home.component';
import { UserComponent } from '../user/user.component';
import { TablesComponent } from '../tables/tables.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(translatorLayoutRoutes),
    FormsModule,
    LbdModule,
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    TablesComponent,
  ]
})

export class AdminLayoutModule {}
