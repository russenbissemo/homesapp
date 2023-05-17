import { Component, inject } from '@angular/core';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Injection a service in Home component , a service where we intialize
  //housingLocationList data as an array of data

  housingLocationList: Housinglocation[] = [];

  constructor(private housingService: HousingService) {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}

