import { Component } from '@angular/core';
import { calculateAge } from '../../utils/utils';

interface HeroData {
  name: string;
  avatar: string;
  shortDescription: string;
  age: number;
  gender: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  heroData: HeroData = {
    name: 'Logesh',
    avatar: 'https://avatars.githubusercontent.com/u/50928757?v=4',
    shortDescription: 'A full time learner, full stack developer!',
    age: calculateAge('1996-08-09'),
    gender: 'he/him',
  }

}
