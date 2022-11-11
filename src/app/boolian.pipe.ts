import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolian'
})
export class BoolianPipe implements PipeTransform {


  //pipie that turns string value into boolian 
  transform(value: string, ):boolean {
     
    if(value === "active"){
      return true 
    } 
    else
    {
      return false
    }
  }

}
