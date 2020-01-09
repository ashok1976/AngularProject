import {Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import{ ServiceService } from './../service/service.service';
import{Hero} from './../loginpopup/form/user';
import{ ProductdetailComponent} from './productdetail/productdetail.component';
import{ ProductService } from './../service/product.service';
import { ChildActivationEnd, Router, ActivatedRoute } from '@angular/router';
import{ CountryService} from './../service/country.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation:ViewEncapsulation.None
})

export class ProductComponent implements AfterViewInit {
post:any =[];;
len; newMessage;
show:boolean=true;
startrRange = 0;
current=0
endRange = 20;
updated = 20;
selected:Hero;
message:string; changes;
postComment:any = []
@ViewChild(ProductdetailComponent, {static:false}) child;employee; countries
parentMessage = " Message from the parent to child component";

HEROES: Hero [] = [
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
]

constructor(private router:Router,private _service: ServiceService,private _ProductService:ProductService,private ActivatedRoute:ActivatedRoute, private CountryService: CountryService,private route: ActivatedRoute){ }


  ngOnInit(){
    this._service.getPost().subscribe(data => {
         this.post = data;
         this.len = this.post.length;
     });
     this._service.currentMessage.subscribe(data => this.newMessage = data);
     this._ProductService.getComment().subscribe(data => {
          this.postComment = data
       })  

    this.CountryService.getCountries().subscribe(
       data => {this.countries = data});
    }

      read(){
      this.endRange += this.updated;
        if(this.len === this.endRange){
              this.show = false;
        }
          this.current++;
      }

 trackById(id:number,title:string){
          return id ? title : undefined
    }
  ngAfterViewInit(){
       //this.message = this.child.message
      }  


      Data(data){
        this._ProductService.onSelect(data);
        this.router.navigate(['/product/productdetail'], { queryParams: { "id": data.id } })
      }
      resolveData(val){
        this.router.navigate(['product/productresolve', val])
      }
}




