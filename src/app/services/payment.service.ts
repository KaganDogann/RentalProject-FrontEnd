import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  apiUrl="https://localhost:44306/api/"
  private dataSource=new ReplaySubject<Rental>(1)//rental türünde kayıt tutuyor. 
  //dataSource:Rental bunu bi dene 
  currentData=this.dataSource.asObservable();//döndürülebilir.

  constructor(private httpClient:HttpClient) { }
  updateData(data:Rental){
    this.dataSource.next(data);
  }

  add(rental:Rental):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"rental/add",rental)
  }

  totalPrice(totalAmountInfo:any):Observable<any>{
    let newPath=this.apiUrl+"rental/totalprice"

    return this.httpClient.get<any>(newPath,totalAmountInfo)
  }
}
