//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface WeatherData {
  current: {
    weather: { description: string, icon: string }[],
    temp: number,
    pressure: number,
    humidity: number
  },
  daily: { temp: { day: number } }[],
  hourly: { temp: number, weather: { icon: string } }[]
}

@Component({
  selector: 'app-forecasting',
  templateUrl: './forecasting.component.html',
  styleUrls: ['./forecasting.component.css']
})
export class ForecastingComponent implements OnInit{

  private readonly QUERY_URL = 'https://api.openweathermap.org/data/2.5/onecall?';
  private readonly LAT = 'lat=52.229676&';
  private readonly LON = 'lon=21.012229&';
  private readonly API_OPTIONS = 'units=metric&exclude=minutely,alerts&';
  private readonly API_KEY = 'appid=dbb76c5d98d5dbafcb94441c6a10236e';
  private readonly FILE = this.QUERY_URL + this.LAT + this.LON + this.API_OPTIONS + this.API_KEY;
  private readonly NAME = 'Warsaw';
  private readonly TIME_NOW = new Date().getHours();

  private readonly iconBaseUrl = 'http://openweathermap.org/img/wn/';
  private readonly iconFormat = '.png';

  data: WeatherData | undefined;
  description: string | undefined;
  temp: number | undefined;
  pressure: number | undefined;
  humidity: number | undefined;
  bgGif: string | undefined;

  iconsFullyUrl: { [key: string]: string } | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<WeatherData>(this.FILE).subscribe(data => {
      this.data = data;
      this.description = data.current.weather[0].description;
      this.temp = Math.round(data.current.temp);
      this.pressure = data.current.pressure;
      this.humidity = data.current.humidity;

      const main = data.current.weather[0].main;

      switch (main) {
        case 'Snow':
          this.bgGif = "url('https://mdbgo.io/ascensus/mdb-advanced/img/snow.gif')";
          break;
        case 'Clouds':
          this.bgGif = "url('https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif')";
          break;
        case 'Fog':
          this.bgGif = "url('https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif')";
          break;
        case 'Rain':
          this.bgGif = "url('https://mdbgo.io/ascensus/mdb-advanced/img/rain.gif')";
          break;
        case 'Clear':
          this.bgGif = "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
          break;
        case 'Thunderstorm':
          this.bgGif = "url('https://mdbgo.io/ascensus/mdb-advanced/img/thunderstorm.gif')";
          break;
        default:
          this.bgGif = "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
          break;
      }

      this.iconsFullyUrl = {
        today: this.iconBaseUrl + data.current.weather[0].icon + this.iconFormat,
        tomorrow: this.iconBaseUrl + data.daily[0].weather[0].icon + this.iconFormat,
        dAT: this.iconBaseUrl + data.daily[1].weather[0].icon + this.iconFormat,
        now: this.iconBaseUrl + data.daily[1].weather[0].icon + this.iconFormat,
        plus1: this.iconBaseUrl + data.hourly[1].weather[0].icon + this.iconFormat,
        plus2: this.iconBaseUrl + data.hourly[2].weather[0].icon + this.iconFormat,
        plus3: this.iconBaseUrl + data.hourly[3].weather[0].icon + this.iconFormat,
        plus4: this.iconBaseUrl + data.hourly[4].weather[0].icon + this.iconFormat,
        plus5: this.iconBaseUrl + data.hourly[5].weather[0].icon + this.iconFormat,
      };
    });
  }

}
