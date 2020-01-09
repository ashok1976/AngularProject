
import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { ActivatedRoute , Params, Router, ParamMap} from '@angular/router';
import{ EmployeeList} from './../../service/employee.service'
import{  CountryService} from './../../service/country.service'
import { switchMap} from 'rxjs/operators';
import { of } from 'rxjs';


@Component({
  selector: 'app-product-resolve',
  templateUrl: './product-resolve.component.html',
  styleUrls: ['./product-resolve.component.css'],
 encapsulation:ViewEncapsulation.Native
})
export class ProductResolveComponent implements OnInit {
data:any
  countryData:any;postName;
subData:any;
catData:any; id;a
  constructor(private countryService: CountryService, private ActivatedRoute:ActivatedRoute,    
    private route:ActivatedRoute, private Router:Router ) {

 
  }
 
  ngOnInit(){
    this.data = this.route.snapshot.data;
    this.countryData = this.route.snapshot.data['countryDetail'];
    this.id = this.countryData
    this.ActivatedRoute.data.subscribe(params => {
        this.subData = params['countryDetail']
    }) 


    /* this.catData =  this.route.paramMap.subscribe(params=> {  
     
     return this.countryService.getCountry(params['countryId'])
     }) */
      

   

    this.route.paramMap.subscribe(params => {
      console.log(params.get('countryId'));
      console.log(params);
   
    });

  }
  current =0


  next(){
   let id = this.catData + 1 ;

   this.Router.navigate(['productresolve', id])
   this.current++

  }
}
