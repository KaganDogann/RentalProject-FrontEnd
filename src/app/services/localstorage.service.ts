import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  getToken():any{
    return localStorage.getItem('token')
  }

  removeToken(){
    localStorage.removeItem('token');
  }

  saveToken(token:string){
    localStorage.setItem('token',token)
    
  }
}
