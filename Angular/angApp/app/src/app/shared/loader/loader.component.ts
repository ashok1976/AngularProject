import { Component, OnInit } from '@angular/core';
import { LoaderService} from './../../service/loader.service'
import{ loaderIntercept} from './../../service/loader.intercept'
import { Subject } from 'rxjs';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  isloading
  constructor(private loaderService: LoaderService){}

  ngOnInit() {
    this.loaderService.isLoading.subscribe(data => this.isloading = data)
      
 

  }

}
