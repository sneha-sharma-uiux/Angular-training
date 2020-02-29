import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure:false // default is true
})
export class SortPipe implements PipeTransform {
  //transform is called all times if pure is set to false
  //transform is called whenever object changed if pure set to true
  transform(items: any[], 
           fieldName: string, 
           order: string = 'asc'): any {
    if (!items || !fieldName) {
      return items;
    }

    if (order === 'desc') {
      return items.sort ( (left, right) => {
            if (left[fieldName] < right[fieldName])
              return 1;

            return -1
      })
    }

    // asc
    return items.sort ( (left, right) => {
      if (left[fieldName] < right[fieldName])
        return -1;

      return 1
    })

  }

}
