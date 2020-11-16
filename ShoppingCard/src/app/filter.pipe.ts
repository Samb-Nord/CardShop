import { Pipe, PipeTransform } from '@angular/core';
import { Products } from './model/products';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Products[], search: string): any {
    if(!value || !search)
    return null;

    return value.filter(prod =>
      prod.titre.toLowerCase().indexOf(search.toLowerCase()) !== -1);
    }
  }


