import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from 'src/app/models/userModel';
import { AuthService } from 'src/app/services/auth.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';


@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  userInfo:UserModel=this.authService.getUserInfo()

  constructor(private authService:AuthService, private localStorageService:LocalstorageService,private router:Router,private toastrservice:ToastrService) { }

  ngOnInit(): void {
    this.ngDoCheck()
  }


  isAuthenticated(){
    return this.authService.isAuthenticated();
  }

  logout(){
    this.localStorageService.removeToken();
    this.toastrservice.success("başarı ile çıkış yaptınız")
    this.router.navigate([""])

  }

  ngDoCheck(){  
    if(this.userInfo!==this.authService.user){
      this.userInfo = this.authService.user;
    }
  }

}
