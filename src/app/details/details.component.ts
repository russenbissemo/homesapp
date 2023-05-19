import { Component, Input , OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';
import {Location} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent  {

  @Input() housinglocation?: Housinglocation
  housingLocationId = -1;
  housingLocation: Housinglocation | undefined;
  applyForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl('')

  })

  constructor(
    private route: ActivatedRoute,
    private HousingService: HousingService,
    private location : Location
  ){
    const housingLocationId = Number(this.route.snapshot.params['id']);
 this.HousingService.getHousingLocationById(housingLocationId).then(housingLocation => {
    this.housingLocation = housingLocation;
  });
  }

  submitApplication() {
    this.HousingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }


}
