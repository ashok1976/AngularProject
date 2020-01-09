import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name:'default'})
export class DefaultPipe implements PipeTransform {
  transform(value: any, defaultImg,forceHttps:boolean = false): any {
   let imageUrl ="";
    if(value){
      imageUrl = value
    }else{
      imageUrl = defaultImg
    }
    if(forceHttps){
      if(imageUrl.indexOf('https') == -1){
        imageUrl = imageUrl.replace("http", "https");
      }
   }
  return imageUrl;
  }

}
@Pipe({name:'simple'})
export class SimplePipe implements PipeTransform{
  transform(value:any){
    let msg = "Welcome to " + value;
    return msg
  }
}

@Pipe({name :'filter'})
export class Searchfilter implements PipeTransform{
  dropdown:boolean = false;

  transform(items:any[], searchText:string):any{
    if(!items){
      return []
    }
    if(!searchText){
      return items;

    }
    searchText = searchText.toLowerCase()
    return items.filter((item)=> {
     this.dropdown= true
      //console.log(item)

    return item.toLowerCase().includes(searchText)

    } )
  

  }

}

@Pipe({name:'allfilter'})
export class NewFilter implements PipeTransform{
    transform(value:any[], args:string, data?:string){
      if(!value){
        return []
      }
     if(!args){
        return value
      }  
      if (args == '' || args == null){
        return []
      };
 args = args.toLowerCase();

return value.filter((val)=> {


    return JSON.stringify(val).toLowerCase().includes(args)


   });


      /* if(!value)return null;
      if(!args)return value;

      args = args.toLowerCase();

      return value.filter(function(item){
          return JSON.stringify(item).toLowerCase().includes(args);
      }); */
      
     }
  }
/*   @Pipe({
    name: 'FilterPipe',
})
export class FilterPipe implements PipeTransform {
    transform(value: any, input: string, searchableList: any) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el: any) {
                var isTrue = false;
                for (var k in searchableList) {
                    if (el[searchableList[k]].toLowerCase().indexOf(input) > -1) {
                        isTrue = true;
                    }
                    if (isTrue) {
                        return el
                    }
                }
            })
        }
        return value;
    }
} */