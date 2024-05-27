import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
interface Slide {
  id: number;
  title: string;
  overview: string;
  posterPath: string;
  runtime: string;
  genres: string;
}
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {
  constructor(private movieService: ServicesService) {}
  slides: Slide[] = [];
  // slides: Slide[] = [
  //   {
  //     url: '../../../assets/Images/arrival.jpg',
  //     title: 'Arrival',
  //   },
  //   {
  //     url: '../../../assets/Images/blade runner.jpg',
  //     title: 'Blade Runner',
  //   },
  //   {
  //     url: '../../../assets/Images/DuneImage.jpg',
  //     title: 'Dune',
  //   },
  //   {
  //     url: '../../../assets/Images/star war.png',
  //     title: 'Star War',
  //   },
  //   {
  //     url: '../../../assets/Images/The tomorrow war.jpg',
  //     title: 'The tomorrow war',
  //   },
  //   {
  //     url: '../../../assets/Images/DuneImage.jpg',
  //     title: 'Dune',
  //   },
  //   {
  //     url: '../../../assets/Images/star war.png',
  //     title: 'Star War',
  //   },
  //   {
  //     url: '../../../assets/Images/The tomorrow war.jpg',
  //     title: 'The tomorrow war',
  //   },
  //   {
  //     url: 'https://via.placeholder.com/300x400?text=Movie+6',
  //     title: 'Movie 6',
  //   },
  //   {
  //     url: 'https://via.placeholder.com/300x400?text=Movie+7',
  //     title: 'Movie 7',
  //   },
  // ];
  currentIndex = 0;
  translateX = 0;
  intervalId: any;

  ngOnInit() {
    this.movieService.getMovies().subscribe((res) => {
      res.results.map((movie: any) => {
        this.slides.push({
          id: movie.id,
          title: movie.title,
          overview: movie.overview,
          posterPath: movie.poster_path,
          runtime: movie.details?.runtime,
          genres: movie.details?.genres,
        });
      });
    });
  }

  getFullImageUrl(posterPath: string): string {
    return `https://image.tmdb.org/t/p/original${posterPath}`;
  }

  ngOnDestroy() {}

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.updateSliderPosition();
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.updateSliderPosition();
  }
  updateSliderPosition(): void {
    const slideWidth = document.querySelector('.slide')?.clientWidth || 300;
    const margin = 20;
    this.translateX = -this.currentIndex * (slideWidth + margin);
  }
}
