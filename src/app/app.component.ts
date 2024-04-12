import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; // добавим импорт NgForm
import { WeatherService } from './weather.service';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  weatherData: any;
  city: string = 'Moscow';

  currentDay = new Date();

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData(this.city);
  }

  onSubmit(form: NgForm): void {
    const city = form.value.city;
    this.getWeatherData(city);
  }

  private getWeatherData(city: string): void {
    this.weatherService.getWeather(city).subscribe((data) => {
      this.weatherData = data;
      console.log(data);
    });
  }
}
