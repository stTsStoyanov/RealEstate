import { Component } from '@angular/core';
import { ApartmentService } from '../apartment.service';
import { Apartment } from '../apartment';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';//? da probvam i bez /operators

import { ApartmentDetailsComponent } from '../apartment-details/apartment-details.component';

@Component({
  selector: 'app-apartment-search',
  templateUrl: './apartment-search.component.html',
  styleUrls: ['./apartment-search.component.css']
})
export class ApartmentSearchComponent {
  constructor(private apartmentService: ApartmentService,
              private apartmentDetails: ApartmentDetailsComponent){}

  apartment$!: Observable<Apartment[]>; // observable with the result
  private searchTerm = new Subject<string>(); // observe and observable 2 in 1

  price$!: Observable<Apartment[]>;
  private searchPrice = new Subject<number>();

  search(term: string){
    this.searchTerm.next(term);
  }

  ngOnInit(){
    this.apartment$ = this.searchTerm.pipe(
      // Wait for 300ms pause in events before considering the term
      debounceTime(300),
      // Ignore new term if same as previous term
      distinctUntilChanged(),
      // Switch to new search observable each time the term changes
      switchMap((term: string) => this.apartmentService.searchApartment(term))
    );

    this.price$ = this.searchPrice.pipe(
      debounceTime(300),
      distinctUntilChanged(),

      switchMap((value: number) => {
        console.log(`Searching by price: ${value} and ${typeof value}`);
        return this.apartmentService.searchPrice(value);
      })
    );
  }


  price(amount: string){
    let target = Number(amount);
    this.searchPrice.next(target)
  }
}
