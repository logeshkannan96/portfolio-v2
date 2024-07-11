import { Component } from '@angular/core';
import { LinkArrowComponent } from '../link-arrow/link-arrow.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [LinkArrowComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
