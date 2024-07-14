import { Component } from '@angular/core';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe } from '@angular/common';
import PostAttributes from '../post-attributes';

@Component({
  selector: 'app-till-slug',
  standalone: true,
  imports: [AsyncPipe, MarkdownComponent],
  template: `
    @if (post$ | async; as post) {
    <article class="max-w-4xl">
      <h1>{{ post.attributes.title }}</h1>
      <img [src]="post.attributes.coverImage"/>
      <analog-markdown [content]="post.content" />
    </article>
    }
  `,
})
export default class TilViewComponent {
  readonly post$ = injectContent<PostAttributes>({
    param: 'slug',
    subdirectory: 'tils',
  });
}
