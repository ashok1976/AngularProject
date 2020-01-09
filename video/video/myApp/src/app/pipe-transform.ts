import { Pipe, PipeTransform } from '@angular/core';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';
import { filter } from 'rxjs/operators';
@Pipe({name: 'reverseStr'})
export class ReverseStr implements PipeTransform {
  transform(value: string): string {
    let newStr: string = "";
    for (var i = value.length - 1; i >= 0; i--) {
      newStr += value.charAt(i);
    }
    return newStr;
  }
}
@Pipe({name:'myPipe'})
export class myPipe implements PipeTransform{
    transform(value:string, before:string,after:string):string{
        let newStr:string = '';
        newStr += `${before} ${value} ${after}`;
        return newStr;

    }

}
 
    @Pipe({ name:'FilterPipe'  })
    export class FilterPipe implements PipeTransform{
        transform(items:any){
         if(items && items.length){
              return items.filter(item => item >= 18 )
             }
        }

    }
@Pipe({name:'remove'})
export class removeDuplicateName implements PipeTransform{
    transform(myAr:any){
    return myAr.filter((val,index,array) => {
      if(array.indexOf(val)==index){
        return val
      }
    })
   }
}

@Pipe({name:'currency'})
export class currencyType implements PipeTransform{
  transform(value){
    if(!value){
      return'1.00'
    }
    return value;


  }

}
@Pipe({  name: 'filter'})
export class myfilter implements PipeTransform{
  transform( items: any[], searchText: string){
  if(!items){
      return []
    }
    if(!searchText){
       return items
    } 
    searchText = searchText.toLowerCase();
    return items.filter(function(item){
      return item.toLowerCase().includes(searchText)
      })
  }

}