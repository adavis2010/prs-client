import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bool'
})
export class BoolDisplayPipe implements PipeTransform { //implements is for interface

  transform(value: boolean, locale: string = "en"): string { //2 parameters
    if(locale == "en"){
      return value ? "Yes" :"No";
    }



  }

}