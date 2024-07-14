import { injectContentFiles } from '@analogjs/content';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import PostAttributes from '../post-attributes';

@Component({
  selector: 'app-til',
  standalone: true,
  imports: [RouterLink],
  template: `
  <h2>Today I Learned</h2>
  <div class="py-8">
    @for (post of posts;track post.attributes.slug) {
      <div class="flex flex-row items-center gap-8 pt-4">
        <p class="italic">{{ post.attributes.date }}</p>
        <a [routerLink]="['/tils/', post.attributes.slug]">
          <h3>{{ post.attributes.title }}</h3>
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
}