import { Component, Input , OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';
import {Location} from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent  {

  @Input() housinglocation?: Housinglocation
  housingLocationId = -1;
  housingLocation: Housinglocation | undefined;

  constructor(
    private route: ActivatedRoute,
    private HousingService: HousingService,
    private location : Location
  ){
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.HousingService.getHousingLocationById(housingLocationId);
  }


}
