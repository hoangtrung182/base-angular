import { Pipe, PipeTransform } from '@angular/core';
import { Iproduct } from './interface';

@Pipe({
  name: 'searchBox'
})
export class SearchBoxPipe implements PipeTransform {

  transform(data: any, text: string){
    const filterArray = data?.filter((item: Iproduct) => item.name?.toLowerCase().indexOf(text.toLowerCase()) != -1);
    return filterArray;
  }

}
