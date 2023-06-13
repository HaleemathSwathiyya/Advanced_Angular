import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service/weather.service.component';
//import { WeatherService } from './weather.service/weather.service.component';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  providers: [WeatherService]
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    const location = 'San Francisco'; // Replace with the desired location
    this.weatherService.fetchWeatherData(location);
  }
  
  title = 'forecastnow';
}
