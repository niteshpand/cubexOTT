import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(private http: HttpClient) {}

  getMovies() {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhN2Y5OTFmNzA0ZGIwZGI1ZTA4ZjJlNTAzNjkwYmYyOCIsInN1YiI6IjYyYTc1MzU5N2Y2YzhkNzdiYmE0OTVjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UoY4H_XbQLNIhC0MJWR6wQ9C0Qiwc9DLCEQyIevE8RU',
    });
    return this.http.get<any>(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=a7f991f704db0db5e08f2e503690bf28',
      {
        headers: httpHeaders,
      }
    );
  }
}
