import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { MealsComponent } from './meals/meals.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SidebarComponent,FooterComponent,MealsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'recipes';
}
