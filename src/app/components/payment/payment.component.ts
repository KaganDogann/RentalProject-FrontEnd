import { Component, Inject, Input, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Rental } from 'src/app/models/rental';
import { PaymentService } from 'src/app/services/payment.service';
import { RentalAddComponent } from '../rental-add/rental-add.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  modelRental:Rental;
  carId:number;
  rentDate:Date;
  returnDate:Date;



  constructor(
    private paymentService: PaymentService,
    private activetedRoue: ActivatedRoute,
    private toastrService:ToastrService
  ) {}


  ngOnInit(): void {
    this.activetedRoue.params.subscribe((param) => {
      console.log(param['carId']);
      if (param["carId"]) {
        this.carId=param["carId"]
      }
    });
    console.log(
      'ilkconsole',
      this.paymentService.currentData.subscribe((data) => {
        console.log('data:', data);
        this.rentDate=data[0].rentDate;
        this.returnDate=data[0].returnDate
      })

    );
  }
  

  add(){
    this.modelRental.carId=this.carId
    this.modelRental.rentDate=this.rentDate
    this.modelRental.returnDate=this.returnDate
    console
    /* this.paymentService.add(this.modelRental).subscribe(response=>{
      this.toastrService.success(response.message)
    },
    (responseError)=>{
      this.toastrService.error(responseError.error)
    }) */
  }

}
