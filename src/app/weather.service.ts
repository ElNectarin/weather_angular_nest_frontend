import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private baseUrl = 'http://localhost:3000/weather'; // Базовый URL вашего NestJS-контроллера

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const url = `${this.baseUrl}?city=${city}`;
    return this.http.get<any>(url);
  }
}
