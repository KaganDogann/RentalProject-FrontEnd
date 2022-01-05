import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  constructor(private authService:AuthService, private localStorageService:LocalstorageService,private router:Router,private toastrservice:ToastrService) { }

  ngOnInit(): void {
  }


  isAuthenticated(){
    return this.authService.isAuthenticated();
  }

  logout(){
    this.localStorageService.removeToken();
    this.toastrservice.success("başarı ile çıkış yaptınız")
    this.router.navigate(["/cardetails"])
  }

  

  


}
