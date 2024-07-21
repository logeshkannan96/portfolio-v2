import { injectContentFiles } from '@analogjs/content';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import PostAttributes from '../post-attributes';
import { title } from '../signals';

@Component({
  selector: 'app-til',
  standalone: true,
  imports: [RouterLink],
  template: `
  <h2>Today I Learned</h2>
  <div class="py-4">
    @for (post of posts;track post.attributes.slug) {
      <div class="flex flex-row items-center gap-8 pt-4">
        <p class="text-sm font-normal italic">{{ post.attributes.date }}</p>
        <a [routerLink]="['/tils/', post.attributes.slug]">
          <h4>{{ post.attributes.title }}</h4>
        </a>
      </div>
    }
  </div>
  `,
})
export default class TilComponent {
  readonly posts = injectContentFiles<PostAttributes>((contentFile) => {
    return contentFile.filename.includes('/src/content/tils')
  });
  title = title;

  constructor() {
    this.title.update(() => 'Today I Learned!');
  }
}