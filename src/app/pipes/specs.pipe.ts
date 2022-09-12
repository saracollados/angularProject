import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'specs'
})
export class SpecsPipe implements PipeTransform {

  transform(spec: number): unknown {
    return spec/10;
  }

}
