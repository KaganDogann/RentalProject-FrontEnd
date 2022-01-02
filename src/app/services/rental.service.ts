import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RentalDetails } from '../models/rentalDetails';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl="https://localhost:44306/api/Rental/getrentalsdetails"
  constructor(private httpClient:HttpClient) { }


  getRentals():Observable<ListResponseModel<RentalDetails>>{
    return this.httpClient.get<ListResponseModel<RentalDetails>>(this.apiUrl);
  }

}
