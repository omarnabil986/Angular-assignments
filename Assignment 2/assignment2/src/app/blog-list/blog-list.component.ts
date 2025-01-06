import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  imports: [CommonModule],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css',
})
export class BlogListComponent {
  blogs: string[] = [
    'Understanding Angular Pipes',
    'A Guide to Angular Directives',
    'Mastering Angular Components',
    'RxJS for Beginners',
    'Angular Routing Explained',
  ];

  showAll: boolean = false;

  toggleList(): void {
    this.showAll = !this.showAll;
  }
}
