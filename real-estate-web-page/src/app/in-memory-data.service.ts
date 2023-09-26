import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Apartment } from './apartment';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb(){
    const apartments: Apartment[] =[
      {name:'One bedroom Top location',
      location:'Studentski grad',
      id:1,
      rooms:2,
      price:88000,
      service:false,
      pictures:['../assets/images/id1Img1.jpg']},

      {name:'One bedroom on hot price',
      location:'Strelbishte',
      id:2,
      rooms:2,
      price:108000,
      service:false,
      pictures:['../assets/images/id2Img1.jpg']},

      {name:'One bedroom for fun people',
      location:'Studentski grad',
      id:3,
      rooms:2,
      price:68000,
      service:false,
      pictures:['../assets/images/id3Img1.jpg']},

      {name:'One bedroom on quite street',
      location:'Lozenets',
      id:4,
      rooms:2,
      price:168000,
      service:false,
      pictures:['../assets/images/id4Img1.jpg']},

      {name:'One bedroom best place in the Town',
      location:'Malinova dolina',
      id:5,
      rooms:2,
      price:98000,
      service:false,
      pictures:['../assets/images/id5Img1.jpg']},
    ]

    return {apartments};
  }

  genId(apartment: Apartment[]): number {
    return apartment.length > 0 ? Math.max(...apartment.map(apartmentId => apartmentId.id)) + 1 : 1;
  }
}
