import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RegisterComponent } from './components/register/register.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { LoginGuard } from './guards/login.guard';



const routes: Routes = [
  {path:"" ,pathMatch:"full", component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/color/:colorId", component:CarComponent},
  {path:"cars/color/:colorId/brand/:brandId",component:CarComponent},
  {path:"colors",component:CarComponent},
  {path:"carDetail", component:CarDetailComponent},
  {path:"cars/brand/:brandId/carDetail", component:CarDetailComponent},
  {path:"cars/color/:colorId/carDetail", component:CarDetailComponent},
  {path:"cars/carDetails/:carId",component:CarDetailComponent},
  {path:"cars/carDetails/:carId/payment",component:PaymentComponent},
  {path:"cars/rentalAdd",component:RentalAddComponent},
  {path:"cars/carAdd",component:CarAddComponent, canActivate:[LoginGuard]},
  {path:"cars/colorAdd",component:ColorAddComponent,canActivate:[LoginGuard]},
  {path:"cars/brandAdd",component:BrandAddComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
