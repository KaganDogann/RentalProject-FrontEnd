import { Pipe, PipeTransform } from '@angular/core';
import { CarDetails } from '../models/carDetails';


@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: CarDetails[], filterText: string):  CarDetails[] {
    filterText=filterText?filterText.toLocaleLowerCase():"";
    return filterText?value.filter((p:CarDetails)=>p.modelName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
    //value.filter= value'yi filtrele 
    //((p:Product)=>p.productName.toLocaleLowerCase()= her bir ürünü gez onları küçük harf e çevir.
    //indexOf(filterText) içinde var mı? ne var mı:filterText bu bize true döndürür.  
    //indexOf bulamazsa -1 bulursa bulduğu yerin indeksini verir.
    //​index of değer bulamazsa -1 döner angular a özel değil
  }
  

}
