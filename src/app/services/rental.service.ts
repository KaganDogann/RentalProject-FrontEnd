import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RentalDetails } from '../models/rentalDetails';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl="https://localhost:44306/api/Rental/"
  constructor(private httpClient:HttpClient) { }


  getRentals():Observable<ListResponseModel<RentalDetails>>{
    let newPath=this.apiUrl+"getrentalsdetails"
    return this.httpClient.get<ListResponseModel<RentalDetails>>(newPath);
  }



  isCarAvaible(carId:number){
    let newPath=this.apiUrl+"iscaravaible?cardId="+carId;
    return this.httpClient.get<ResponseModel>(newPath);

  }
}
