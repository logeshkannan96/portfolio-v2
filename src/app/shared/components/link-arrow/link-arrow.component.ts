import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-arrow',
  standalone: true,
  imports: [],
  templateUrl: './link-arrow.component.svg',
  styleUrl: './link-arrow.component.css'
})
export class LinkArrowComponent {
  @Input() strokeColor: string = 'currentColor';
}
