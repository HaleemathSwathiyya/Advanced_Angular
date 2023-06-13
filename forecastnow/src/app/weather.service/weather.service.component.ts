import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiEndpoint = 'https://api.openweathermap.org/data/2.5/forecast';
  private apiKey = 'f6ddcfcf065f5af49761124345d25cc3';


  constructor(private http: HttpClient) {}

  fetchWeatherData(location: string) {
    const url = `${this.apiEndpoint}?q=${encodeURIComponent(location)}&appid=${this.apiKey}&units=metric&cnt=5&exclude=hourly,minutely`;
    console.log(url);

    return this.http.get(url);
  }
}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class WeatherService {
//   apiKey = 'f6ddcfcf065f5af49761124345d25cc3';

//   constructor(private http: HttpClient) {}

//   fetchWeatherData(location: string) {
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${this.apiKey}`;

//     return this.http.get(apiUrl);
//   }
// }
