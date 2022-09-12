import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statNames'
})
export class StatNamesPipe implements PipeTransform {

  transform(statName: string): string {
    let newStatName = '';

    if(statName == 'hp') {
      newStatName = 'HP';
    } else {
      newStatName = statName[0].toUpperCase() + statName.substring(1).toLowerCase().replace("-", " ");
    }

    return newStatName;
  }

}
