import { Component } from '@angular/core';
import { ApartmentService } from '../apartment.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Apartment } from '../apartment';

@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.css']
})

export class ApartmentDetailsComponent {
  constructor(private apartmentsService: ApartmentService,
              private route: ActivatedRoute,
              private location: Location){}
  
  apartment?: Apartment;

  getApartment(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.apartmentsService.getApartment(id)
      .subscribe(apartment => this.apartment = apartment)

  }

  ngOnInit(){
    this.getApartment();
  }

}
