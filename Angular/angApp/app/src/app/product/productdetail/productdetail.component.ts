import { Component, OnInit, Input, Output,EventEmitter, OnChanges } from '@angular/core';
import{ ProductService} from './../../service/product.service'
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit, OnChanges {

  public sub;
  myid;
  myname; myemail; mybody;

  constructor( private _ProductService:ProductService, private ActivatedRoute:ActivatedRoute,private router:Router  ) { }

  ngOnInit() {

  //  this.id = this.ActivatedRoute.snapshot.params['id'] // first Method 
  //  this.id = this.ActivatedRoute.snapshot.paramMap.get('id')  // first Method 
  /*  this.ActivatedRoute.params.subscribe(params =>{
    this.id = +params['id'];
    this.getId = this._ProductService.getCommentByID(this.id)
   }) */
   // subscribe to the parameters observable
/*    this.ActivatedRoute.paramMap.subscribe(params =>{
      this.id = params.get('id');
      this.getId = params.get('name')
   }) */
  

/*    this.ActivatedRoute.queryParams.subscribe(queryMap =>{
     this.sub = queryMap;
    }); */
    this.ActivatedRoute.queryParams.subscribe(params =>{
      this.myid = params['id'];
      this.myname = params['name']
      console.log(this.myid + "::"+this.myname)
     }); 

  this._ProductService.message.subscribe(data =>{
      this.sub = data;
   
    })

  }

  Previous(){
    let PriviousID = this.sub.id - 1;
    console.log(PriviousID)
    this.router.navigate(['/product/productdetail'],{queryParams:{id:PriviousID}}) 
  }

 ngOnChanges(){ }
  ngOnDestroy() {
  //  this.id.unsubscribe();
  }
}
//https://www.youtube.com/watch?v=XqM6mkGHP2I