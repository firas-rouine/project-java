import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { UserComponent } from '../user/user.component';

export const translatorLayoutRoutes: Routes = [
    { path: 'user-dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
];
