import { Pipe, PipeTransform } from '@angular/core';


// 2|power:3 ==> 2^3
//left |nameofpipe:parameter1:param2:param3

//default value
// 5|power ==> 5^1 =5
@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {
  //value:power:exponent
  transform(value: any, exponent:number=1): number {
    return Math.pow(value,exponent);
  }

}
