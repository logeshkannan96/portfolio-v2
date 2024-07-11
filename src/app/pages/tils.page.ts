import { injectContentFiles } from '@analogjs/content';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import PostAttributes from '../post-attributes';

@Component({
  selector: 'app-til',
  standalone: true,
  imports: [RouterLink],
  template: `
  @for (post of posts;track post.attributes.slug) {
    <a [routerLink]="['/tils/', post.attributes.slug]">
      <h2>{{ post.attributes.title }}</h2>
      <p>{{ post.attributes.description }}</p>
    </a>
  }
  `,
})
export default class TilComponent {
  readonly posts = injectContentFiles<PostAttributes>((contentFile) => {
    console.log(contentFile)
    return contentFile.filename.includes('/src/content/tils')
  });
}