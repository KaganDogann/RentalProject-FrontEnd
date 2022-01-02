import { Component, OnInit } from '@angular/core';
import { RentalDetails } from 'src/app/models/rentalDetails';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentalDetails:RentalDetails[]=[]
  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getRentals();
  }

  

  getRentals(){
    this.rentalService.getRentals().subscribe(response=>{this.rentalDetails=response.data})
  }

}
