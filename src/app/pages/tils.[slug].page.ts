import { Component, Inject } from '@angular/core';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe } from '@angular/common';
import PostAttributes from '../post-attributes';
import { title } from '../signals';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-till-slug',
  standalone: true,
  imports: [AsyncPipe, MarkdownComponent],
  template: `
    @if (post$ | async; as post) {
    <article class="max-w-4xl">
      <h1>{{ post.attributes.title }}</h1>
      <p id="date">Last Updated: {{ post.attributes.date }}</p>
      <hr>
      @if(post.attributes.coverImage) {
        <img [src]="post.attributes.coverImage"/>
      }
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

  title = title;
  
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.post$.subscribe((post) => {
      this.title.update(() => post.attributes.title);
    })
  }
}
