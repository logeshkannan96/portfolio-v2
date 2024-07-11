import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  navItems = [
    { name: 'Home', link: '' },
    { name: 'Projects', link: 'projects' },
    { name: '✨ TIL', link: 'tils' },
    { name: 'Resume', link: 'resume' },
  ];
}
