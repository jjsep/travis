import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from "@angular/common/http"

const API_URL = environment.API_URL; //declaring our API url for our weather app
const API_KEY = environment.API_KEY; //declaring our API key for our weather app

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  weatherTemp: any;
  todayDate = new Date();
  cityName: "";
  weatherIcon: any;
  weatherDetails: any;
  name = "";
  
  loading = true; //this variable will allow us to implement changes when the user hasn't entered a city -- we will use ngIf in the HTML for these iterations

  constructor(public httpClient: HttpClient) {}

 


  loadData(){
    this.httpClient.get(`${API_URL}/weather?q=${this.cityName}&appid=${API_KEY}`).subscribe(results =>{ //this.cityName will allow us to get the weather from each city
      console.log(results);
      this.weatherTemp = results["main"] //this will allow us to obtain all the information from the main parameters: temp, humidity, pressure, etc.
      this.name = results["name"]; //this will allow the results from the searchBar to have its own name
      console.log(this.weatherTemp);
      this.weatherDetails = results['weather'][0] //inside console -> JSON -> weather, we see that weather gives us an array at index [0],  we can get all info
      console.log(this.weatherDetails);
      this.weatherIcon = `http://openweathermap.org/img/wn/${this.weatherDetails.icon}@4x.png` //when looking at the open weather API documentation, we can see list of weather condition codes with icons. From here we obtain the url provided to obtain the icon related to the weather  
      this.loading = false;
    })
   
  }
}