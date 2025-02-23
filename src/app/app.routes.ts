import { Routes } from '@angular/router';
import { MealsComponent } from './meals/meals.component';
import { NofoundComponent } from './nofound/nofound.component';

export const routes: Routes = [
 {path:'',component:MealsComponent},
 {path:'**',component:NofoundComponent}
];
