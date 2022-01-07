import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  userEmail:string;
  @Input() user1:User;
  
  constructor(private formBuilder:FormBuilder,
    private authService:AuthService,
    private toastrService:ToastrService,
    private userService:UserService,
    private router:Router,
    private localStorage:LocalstorageService) { }

  ngOnInit(): void {
    this.createLoginForm()
    
    
  }
  createLoginForm(){
    this.loginForm=this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required],
    })
  }

  login(){
    if (this.loginForm.valid) {
     // console.log(this.loginForm.value);
      let loginModel=Object.assign({},this.loginForm.value)
      this.authService.login(loginModel).subscribe(response=>{
        this.localStorage.saveToken(response.data.token)
        this.authService.decodedTokenKey=this.authService.decodedToken(response.data.token);
        console.log(this.authService.getUserInfo()); 
        this.router.navigate(["/"]);
        this.toastrService.info("Giriş Yapıldı")
        
      },responseError=>{
        //console.log(responseError);
        this.toastrService.error(responseError.error)
      })
    }
  }

  
}
