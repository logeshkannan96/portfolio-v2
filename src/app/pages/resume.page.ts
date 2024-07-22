import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  template: `
    <div class="resume">
      <p class="text-base font-medium">Resume</p>
      <p class="py-2 text-zinc-500">My resume will go here.</p>
    </div>
  `
})
export default class ResumeComponent {

}
