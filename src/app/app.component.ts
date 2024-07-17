import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { title } from './signals';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <title>{{ title() }}</title>
    <div class="my-12">
      <div class="w-[56rem] mx-auto">
          <app-navbar></app-navbar>
          <div class="my-10">
              <router-outlet></router-outlet>
          </div>
      </div>
    </div>
  `,
})
export class AppComponent {
  title = title;

  constructor() {
    this.title.update(() => 'loki');
  }
}
