import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
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
export class AppComponent {}
