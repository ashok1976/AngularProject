import { Component, OnInit } from '@angular/core';
import{ AdminService} from './../service/admin.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  constructor( private route:ActivatedRoute,private adminService:AdminService) { }
  
  sub:any = []
  ngOnInit() {
    // this.sub = this.route.snapshot.paramMap.get("id")
   /*  this.route.paramMap.subscribe(params  =>{
      this.adminService.getDataByID(params.get('id')).subscribe(data =>{
        this.sub = data;
      })
    }) */ 

    this.route.paramMap.subscribe(params=> { 
     this.adminService.getDataByID(params.get('id')).subscribe(data => this.sub = data)
    })

  }
}