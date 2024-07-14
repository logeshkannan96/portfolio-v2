import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LinkArrowComponent } from "../link-arrow/link-arrow.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, LinkArrowComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  navItems = [
    { name: 'Home', link: '' },
    { name: 'Projects', link: 'projects' },
    { name: '✨ TIL', link: 'tils' },
    { name: 'Resume', link: 'resume', external: true },
  ];
}
