import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizePipe'
})
export class CapitalizePipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
