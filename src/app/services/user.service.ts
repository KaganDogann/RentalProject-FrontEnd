import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl="https://localhost:44306/api/"
  constructor(private httpClient:HttpClient) { }

  /* updateUser(userUpdateModel:UserUpdateModel):Observable<ResponseModel>{ !!!!REFACTOR
    let newPath= this.apiUrl + "Users/UserUpdate"
    return this.httpClient.post<ResponseModel>(newPath,userUpdateModel);
  } */

  getByUserEmail(email:string):Observable<SingleResponseModel<User>>{
    let newPath = this.apiUrl + "Users/GetByUserEmail?email="+email;
    return this.httpClient.get<SingleResponseModel<User>>(newPath)

  }

  /* changePassword(userPasswordUpdate:UserPasswordUpdate):Observable<ResponseModel>{ !!!!REFACTOR 
    let newPath = this.apiUrl +"Users/ChangeUserPassword"
    return this.httpClient.post<ResponseModel>(newPath,userPasswordUpdate);
  } */
}
