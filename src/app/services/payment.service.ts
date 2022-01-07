import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  apiUrl="https://localhost:44306/api/"
  private dataSource=new ReplaySubject<Rental[]>(1)//rental türünde kayıt tutuyor. 
  //dataSource:Rental bunu bi dene 
  currentData=this.dataSource.asObservable();//döndürülebilir.

  constructor(private httpClient:HttpClient) { }
  updateData(data:Rental[]){
    this.dataSource.next(data);
  }

  add(rental:Rental):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"rental/add",rental)
  }
}
