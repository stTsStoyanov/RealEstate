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
      pictures:['../assets/images/id1Img1.jpg'],
      description: "Epa toq e top chovek"},

      {name:'One bedroom on hot price',
      location:'Strelbishte',
      id:2,
      rooms:2,
      price:108000,
      service:false,
      pictures:['../assets/images/id2Img1.jpg'],
      description: "Leleeeeee skupoto batka, ama e mnogo dobro :D"},

      {name:'One bedroom for fun people',
      location:'Studentski grad',
      id:3,
      rooms:2,
      price:68000,
      service:false,
      pictures:['../assets/images/id3Img1.jpg'],
      description: "Studentka si 1-vi kurs, Studentski grad, nov resurs!!!"},

      {name:'One bedroom on quite street',
      location:'Lozenets',
      id:4,
      rooms:2,
      price:168000,
      service:true,
      pictures:['../assets/images/id4Img1.jpg'],
      description: "Male, male, male, a vie si mislite che Strelbishte e skup kvartal, ela da vidish Lozenets, top lokaciq, za top gazari, like pilencata ot Monako!!!"},

      {name:'One bedroom best place in the Town',
      location:'Malinova dolina',
      id:5,
      rooms:2,
      price:98000,
      service:false,
      pictures:['../assets/images/id5Img1.jpg'],
      description: "Smislen apartament, strahoten balans cena/kachestwo, zaslujava si da se vidi! Otoblenie na AC + wather heater, ima instalaciq za GAS, maze i parkomqsto, top izbor!"},
    ]

    return {apartments};
  }

  genId(apartment: Apartment[]): number {
    return apartment.length > 0 ? Math.max(...apartment.map(apartmentId => apartmentId.id)) + 1 : 1;
  }
}
