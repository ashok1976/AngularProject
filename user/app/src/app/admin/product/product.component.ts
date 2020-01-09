import { Component, OnInit, Input } from '@angular/core';
import{ AdminService} from './../service/admin.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  //@Input() childID;ss
  data;



  childID = ['Dainikbhaskar','Divyabhaskar','Divyamarthi','Money Bhaskar']
  constructor(private adminService: AdminService) {


   }

  ngOnInit() {
    this.adminService.getApiData().subscribe(items =>{
     this.data = items

    })
  }

}
