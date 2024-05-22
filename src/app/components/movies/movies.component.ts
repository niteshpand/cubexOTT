import { Component } from '@angular/core';
interface Slide {
  url: string;
  title: string;
}
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {
  slides: Slide[] = [
    {
      url: 'https://via.placeholder.com/300x400?text=Movie+1',
      title: 'Movie 1',
    },
    {
      url: 'https://via.placeholder.com/300x400?text=Movie+2',
      title: 'Movie 2',
    },
    {
      url: 'https://via.placeholder.com/300x400?text=Movie+3',
      title: 'Movie 3',
    },
    {
      url: 'https://via.placeholder.com/300x400?text=Movie+4',
      title: 'Movie 4',
    },
    {
      url: 'https://via.placeholder.com/300x400?text=Movie+5',
      title: 'Movie 5',
    },
    {
      url: 'https://via.placeholder.com/300x400?text=Movie+6',
      title: 'Movie 6',
    },
    {
      url: 'https://via.placeholder.com/300x400?text=Movie+7',
      title: 'Movie 7',
    },
  ];
  currentIndex = 0;

  ngOnInit() {}

  ngOnDestroy() {}

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}
