import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numPipe'
})
export class NumPipe implements PipeTransform {

  transform(val: number) {
    if (val !== undefined && val !== null) {
      return val.toString().replace(",", " ");
    } else {
      return "";
    }
  }
}