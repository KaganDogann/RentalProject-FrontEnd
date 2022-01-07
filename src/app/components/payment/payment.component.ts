import { Component, Inject, Input, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Rental } from 'src/app/models/rental';
import { RentalAddComponent } from '../rental-add/rental-add.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @Input() modelOfRental:Rental[]=[];

  constructor() { }

  ngOnInit(): void {
    console.log("payment modelof rental",this.modelOfRental)
  }

  

}
