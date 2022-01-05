import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  userEmail:string;
  user1:User;
  constructor(private formBuilder:FormBuilder,
    private authService:AuthService,
    private toastrService:ToastrService,
    private userService:UserService) { }

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
        this.toastrService.info(response.message)
        localStorage.setItem("token",response.data.token)
        debugger;
        let UserEmail=this.loginForm.value.email
        this.userService.getByUserEmail(UserEmail).subscribe(data=>{
          this.user1=data.data
        })
        
        console.log(this.user1)
        
      },responseError=>{
        //console.log(responseError);
        this.toastrService.error(responseError.error)
      })
    }
  }

  email(){
    console.log("email e girdi")
    if (this.authService.isAuthenticated()) {
      console.log("email:")
    console.log(this.loginForm.value)
    }
    
  }
}
