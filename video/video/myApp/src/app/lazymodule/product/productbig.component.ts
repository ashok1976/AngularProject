import { Component, OnInit } from '@angular/core';
import { PostService}  from '../post.service'

@Component({
  selector: 'app-productbig',
  templateUrl: './productbig.component.html',
  styleUrls: ['./productbig.component.css']
})
export class ProductbigComponent implements OnInit {
  products:any = [];
  myHTML;
  detailData = []

  constructor( private _service:PostService) { 
    this.myHTML = '<b>This is my awesome bold text</b>'
  }

  ngOnInit(){
    this._service.getViewData().subscribe( data =>  this.products =  data )
}





}
