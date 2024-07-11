import { Component } from '@angular/core';
import { HeroComponent } from '../shared/components/hero/hero.component';
import { AboutComponent } from '../shared/components/about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutComponent],
  templateUrl: './home/home.component.html'
})
export default class HomeComponent {

}
