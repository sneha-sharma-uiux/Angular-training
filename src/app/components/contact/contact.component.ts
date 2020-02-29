import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/shared/models/address';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  mainOffice:Address=undefined; //null
 
  headOffice: Address={
    city:"BLR",
    state:'KA',
    pincode:560001
  }

  branchOffice:Address={
    city:'NOIDA',
    state:'UP',
    pincode:110096
  }

  contactLikes=20;
  constructor() { }

  ngOnInit() {
  }

  contactHandler(address:Address){
    console.log("address to contact",address);
    alert(JSON.stringify(address));
  }

}
