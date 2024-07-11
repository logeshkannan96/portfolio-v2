import { Component } from '@angular/core';
import { AboutComponent } from '../shared/components/about/about.component';
import { ContactComponent } from '../shared/components/contact/contact.component';
import { HeroComponent } from '../shared/components/hero/hero.component';
import { WorkedAsComponent } from '../shared/components/worked-as/worked-as.component';
@Component({
  selector: 'app-portolio',
  standalone: true,
  imports: [HeroComponent, AboutComponent, WorkedAsComponent, ContactComponent],
  templateUrl: './resume/resume.component.html',
  styleUrl: './resume/resume.component.css'
})
export default class PortolioComponent {

}
