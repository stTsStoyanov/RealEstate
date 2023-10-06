import { Component } from '@angular/core';
import { Request } from '../request';

@Component({
  selector: 'app-request-apartment',
  templateUrl: './request-apartment.component.html',
  styleUrls: ['./request-apartment.component.css']
})
export class RequestApartmentComponent {
  storage: Request[] = [];
  submited = false;

  model = new Request("","","",10);

  onSubmit(){ 
    this.storage.push(this.model);
    console.log(`here is the name: ${this.model.name}`)
    console.log(this.storage)

    //da vzema prez params id na apartamenta i da go plqskam kum modela!!!!

    this.submited = true;
  }

  // add(name:string, regarding:string, description:string){
  //   let result = new Request(name, regarding, description);
  //   this.storage.push(result)
  // }

}
