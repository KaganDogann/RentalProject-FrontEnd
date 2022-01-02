import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';


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
  {path:"cars/rentalAdd",component:RentalAddComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
