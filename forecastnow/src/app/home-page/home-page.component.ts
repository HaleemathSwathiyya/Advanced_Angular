// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { WeatherService } from '../weather.service/weather.service.component';

// @Component({
//   selector: 'app-home-page',
//   templateUrl: './home-page.component.html',
//   styleUrls: ['./home-page.component.css']
// })
// export class HomePageComponent implements OnInit {
//   // Weather data properties
//   weather: any; // Stores the current weather data
//   forecast: any[] = []; // Stores the 7-day forecast data

//   // Inject the HttpClient and WeatherService in the constructor
//   constructor(private http: HttpClient, private weatherService: WeatherService) {}

//   ngOnInit(): void {
//     this.weatherService.fetchWeatherData().subscribe(
//       (weatherData: any) => {
//         this.weather = weatherData.currentWeather;
//         this.forecast = weatherData.forecast;
//       },
//       (error: any) => {
//         console.error('Failed to fetch weather data:', error);
//       }
//     );
//   }
// }


import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service/weather.service.component';
//import { WeatherService } from 'path/to/weather.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  // Weather data properties
  weather: any; // Stores the current weather data
  forecast: any[] = []; // Stores the 7-day forecast data

  // Inject the WeatherService in the constructor
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    const city = 'cochin'; // Set the desired city name here
    this.weatherService.fetchWeatherData(city).subscribe(
      (weatherData: any) => {
        this.weather = weatherData.currentWeather;
        this.forecast = weatherData.forecast;
      },
      (error: any) => {
        console.error('Failed to fetch weather data:', error);
      }
    );
  }
}
