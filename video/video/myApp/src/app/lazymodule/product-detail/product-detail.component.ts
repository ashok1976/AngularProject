import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap} from '@angular/router';
import { Observable } from 'rxjs';
import{ PostService } from '../post.service'
import { switchMap } from 'rxjs/operators'; 
import{ map } from 'rxjs/operators'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  id;
  public body: string;
  public title: string;
  constructor(     private route: ActivatedRoute,    private service: PostService ) {

   }

  ngOnInit() {
 this.route.queryParams.subscribe( params => {
   this.id =  params.id ;
   this.title =  params.title;
   this.body =  params.body;
   console.log(params)
 }); 





    }


  

}

//https://stackoverflow.com/questions/46002367/angular-4-route-query-params-cause-path-match-failure
