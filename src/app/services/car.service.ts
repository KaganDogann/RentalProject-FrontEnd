import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';

import { CarDetails } from '../models/carDetails';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';

import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44306/api/"
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<CarDetails>>{
    let newPath=this.apiUrl+"Cars/GetCardetails";
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath=this.apiUrl+"cars/getbybrandId?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath=this.apiUrl+"cars/getbycolorId?colorId="+colorId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

  getCarDetailByCarId(carId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath=this.apiUrl+"cars/GetCardetailsByCarId?carId="+carId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

  getCarDetailByColorAndBrand(colorId:number, brandId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath=this.apiUrl + "cars/GetCarDetailsByColorAndByBrand?colorId="+colorId+ "&brandId=" +brandId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }
  
  
  carAdd(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/add",car)
  }

  getByCarId(carId:number):Observable<SingleResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/Getbycarid?carId="+carId;
    return this.httpClient.get<SingleResponseModel<Car>>(newPath)
  }
}
