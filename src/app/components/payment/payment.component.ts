import { Component, Inject, Input, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { PaymentService } from 'src/app/services/payment.service';
import { RentalService } from 'src/app/services/rental.service';
import { RentalAddComponent } from '../rental-add/rental-add.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  totalAmountInfo:number;
  rentalDay:number;
  modelRental:Rental;
  carId:number;
  rentDate:Date;
  returnDate:Date;
  
 



  constructor(
    private paymentService: PaymentService,
    private activetedRoue: ActivatedRoute,
    private toastrService:ToastrService,
    private carService:CarService

  ) {}


  ngOnInit(): void {
    
    this.activetedRoue.params.subscribe((param) => {
      console.log(param['carId']);
      if (param["carId"]) {
        this.carId=Number(param["carId"])
      }
    });
    
      
      this.paymentService.currentData.subscribe((data) => {
        console.log('data:', data);
        this.rentDate=data.rentDate;
        this.returnDate=data.returnDate
     //   this.totalPrice();
        this.totalAmount();
      })
      
    ;
  }
  

  add(){
    let rental:Rental ={
      rentDate:this.rentDate,
      returnDate:this.returnDate,
      carId:this.carId,
      customerId:0,
    }
     this.paymentService.add(rental).subscribe(response=>{
      this.toastrService.success(response.message)
      this.toastrService.success("araç kiralandı")
    },
    (responseError)=>{
      this.toastrService.error(responseError.error)
    }) 
  }

  totalPrice(){

    const totalnfo={
      rentDate:this.rentDate,
      returnDate:this.returnDate,
      carId:this.carId
    };
    console.log("total info metod",totalnfo)
    this.paymentService.totalPrice(totalnfo).subscribe(response=>{
      console.log(response);
    })
  }

  totalAmount(){
    //var duration=this.rentDate.getTime()-this.returnDate.getTime();
    //console.log("geçen süre",duration);
    const start = new Date(this.rentDate).getTime();
    const end = new Date(this.returnDate).getTime();
    const diff = end - start;
    const duration=(diff/(1000*60*60*24))
    this.rentalDay=duration;
    console.log("geçen süre2",diff,"geçen süre gün",duration);
    this.carService.getByCarId(this.carId).subscribe(response=>{
      const dailyPrice=response.data.dailyPrice
      this.totalAmountInfo=duration*dailyPrice
    })
  }

}
