import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetails } from 'src/app/models/carDetails';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css'],
})
export class RentalAddComponent implements OnInit {
  rentalAddForm: FormGroup;
  carDetail:CarDetails[];
  rentDate: Date;
  returnDate: Date;
  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private toastrService: ToastrService,
    private activatedRoute:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.createRentalAddForm();
    this.activatedRoute.params.subscribe(params=>{
      if (params["carId"]) {
        this.getCarDetailByCarId(params["carId"]) 
      }
    })
  }

  getCarDetailByCarId(carId:number){
    this.carService.getCarDetailByCarId(carId).subscribe(response=>{
      this.carDetail=response.data})
  }


  createRentalAddForm() {
    this.rentalAddForm = this.formBuilder.group({
      //carId: ['', Validators.required],
      //customerId: ['', Validators.required],
      
      rentDate: ['', Validators.required],
      returnDate: ['', Validators.required],
    });
  }

  add() {
    
    if (this.rentalAddForm.valid) {
      
      let rentalModel: Rental = Object.assign({},this.rentalAddForm.value );
      rentalModel.carId=this.carDetail[0].carId;
      console.log(rentalModel)
       this.carService.add(rentalModel).subscribe(
        (response) => {
          console.log(response);
          this.toastrService.success(response.message, 'Başarılı');
        },
        (responseError) => {
          if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(
                responseError.error.Errors[i].ErrorMessage,
                'Doğrulama hatası'
              );
            }
          }
        }
      ); 
    } else {
      this.toastrService.warning('Formunuz Eksik', 'Dikkat');
    }
  }

  

}
