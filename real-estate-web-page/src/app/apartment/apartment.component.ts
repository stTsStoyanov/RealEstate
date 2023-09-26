import { Component, OnInit } from '@angular/core';
import { Apartment } from '../apartment';
import { ApartmentService } from '../apartment.service';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent {
  constructor(private apartmentService:ApartmentService){  }

  apartments: Apartment[] = [];

  getApartments(){
    this.apartmentService.getApartments()
    .subscribe(ap =>{
      this.apartments = ap
    })
  }

  ngOnInit(){
    this.getApartments();
  }

}
