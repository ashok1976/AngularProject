import { Component, OnInit, Input,OnChanges, SimpleChange, SimpleChanges,OnDestroy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit,OnChanges,OnDestroy{

@Input() alert: any;
@Input() name;
@Input() message: string;
@Input() code: number;
@Input() names: string;
  constructor( private changeDetction:ChangeDetectorRef) { 

   var result =
    [{"name": "jmd", "children":[
        {"name": "ppp1","children":[
            {"name": "feeder", "children":[
            {"name": "rmu1","children":[
              {"name": "IT1","children":[
                {"name": "Asset123","value" : "233" }
              ]
        }
            ]
        }
          ]
        }
          ]
        }
        
      ]
    }]


  }

  ngOnInit() {
  }
  loadData(){
    console.log('data is over')
  }
  ngOnChanges(changes:SimpleChanges){
    if(typeof changes['message'] != 'undefined'){
       var change = changes['message'];
     if(!change.isFirstChange()){
          this.loadData();
     }
  }


 
  }
ngOnDestroy(){


  console.log('destroy ng changes')
}
}
