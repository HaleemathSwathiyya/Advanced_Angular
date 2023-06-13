import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WeatherService } from './weather.service/weather.service.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HomePageComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot([]),FormsModule],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {}
