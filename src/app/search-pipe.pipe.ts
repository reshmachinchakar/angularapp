import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(value: any,searchTerm:any): any {

    return value.filter(function(searchh){

      // return searchh.sname.toLowerCase().indexOf(searchTerm.toLowerCase())>-1;//used custom pipe for Product-filter component

    return searchh.name.toLowerCase().indexOf(searchTerm.toLowerCase())>-1;

    });
  }
  
}