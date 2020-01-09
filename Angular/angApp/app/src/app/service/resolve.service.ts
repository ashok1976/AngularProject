import { Injectable } from '@angular/core';
//import{ EmployeeList} from './employee.service'
import{ CountryService} from './country.service'
import { ActivatedRouteSnapshot,  RouterStateSnapshot, Resolve, Router, ActivatedRoute} from '@angular/router'
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ResolveService implements Resolve<any> {
  constructor(private countryService:CountryService, private route: ActivatedRoute,
    private router: Router
    ){  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
     let  id = route.paramMap.get('countryId');
     let URL = state.url
     const tree = this.router.parseUrl(URL);
  
     return this.countryService.getCountry(id).pipe(
        map(country =>{
            if(country){
            
              return country
            }else{
              this.router.navigate(['product']);
              return null
            }


         }
         )


         )
  }

}
