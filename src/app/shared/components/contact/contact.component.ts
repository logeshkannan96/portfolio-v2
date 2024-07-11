import { Component } from '@angular/core';
import { LinkArrowComponent } from '../link-arrow/link-arrow.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LinkArrowComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contacts = [
    { link: 'https://github.com/logeshkannan96', site: 'GitHub', name: 'logeshkannan96' },
    { link: 'https://www.linkedin.com/in/logeshkannan/', site: 'LinkedIn', name: 'logeshkannan' },
    { link: 'https://twitter.com/logeshkannan96', site: 'Twitter', name: 'logeshkannan96' },
    { link: 'https://instagram.com/taurus_stardust', site: 'Instagram', name: 'taurus_stardust' },]
}
