import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';

import { CarDetails } from 'src/app/models/carDetails';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';

import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: CarDetails[]=[];
  filterText="";
  brands: Brand[] = [];
  colors: Color[] = [];
  brandFilter: number=0;
  colorFilter: number=0;
  branddFilter:number=0;
  colorrFilter:number=0;
  cardetailFilter='';
  constructor(private carService:CarService, 
    private activatedRoute:ActivatedRoute,
    private brandService:BrandService,
    private colorService:ColorService,
    private toastrService:ToastrService ) { }

  ngOnInit(): void {

    this.getBrands();
    this.getColors();

    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"] && params["brandId"]){
        this.getCarDetailByColorAndBrand(params["colorId"],params["brandId"])
      }
      
      else if (params["brandId"]) {
        this.getCarsByBrand(params["brandId"])
      }
      
      else if(params["colorId"]) {
        this.getCarsBtColor(params["colorId"])
      }
      else {
        this.getCars();
      }
    })
  }
  
 

  getCars(){
    this.carService.getCars().subscribe(response=>{this.cars=response.data});
  }
  getBrands(){
    this.brandService.getBrands().subscribe(response=>{this.brands=response.data});
  }
  getColors(){
    this.colorService.getColors().subscribe(response=>{this.colors=response.data});
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars=response.data;
    })
  }

  getCarsBtColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars=response.data;
    })
  }

  getSelectedBrand(brandId: number) {
    debugger;
    if (this.brandFilter == brandId) return true;
    else return false;
  }

  getSelectedColor(colorId:number){
    if(this.colorFilter == colorId) return true;
    else return false;
  }

  getCarDetailByColorAndBrand(colorId: number, brandId: number) {
    this.carService.getCarDetailByColorAndBrand(colorId, brandId)
      .subscribe((response) => {
        console.log(response)
        this.cars = response.data;
      });
  }

  setFilter(){
    this.toastrService.success("filtre uygulandı")
    console.log("aaaabb")
  }
}
