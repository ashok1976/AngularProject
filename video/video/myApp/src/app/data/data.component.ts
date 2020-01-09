import { Component, OnInit } from '@angular/core';
import{FormService} from './../Form/form.service';
import { ServiceService } from '../service.service';
import {ReverseStr,myPipe,FilterPipe,removeDuplicateName,currencyType,myfilter} from './../pipe-transform'
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
center:boolean = false;
myValid:boolean = false;
myData:any = [];
behaviour:string;
isBold:boolean = true;
fontSize:number =24;

users = ['English','Math','Science','Hindi'];
searchText:any = '';

val: string = '';  

characters = [
  'Finn the human',
  'Jake the dog',
  'Princess bubblegum',
  'Lumpy Space Princess',
  'Beemo1',
  'Beemo2'
]

name:string = ""



people: any[] = [
{"name": "WORLD",    "population": 6916183000  },
{"name": "More developed regions", "population": 1240935000  },
{"name": "Less developed regions", "population": 5675249000  },
{"name": "Least developed countries", "population": 838807000  },
{"name": "Less developed regions, excluding least developed countries", "population": 4836442000},
{"name": "Less developed regions, excluding China", "population": 4284697000  },
{"name": "Sub-Saharan Africa", "population": 831464000  },
{"name": "AFRICA", "population": 1031084000  },
{"name": "Eastern Africa", "population": 342595000  },
{"name": "Burundi", "population": 9233000  },
{"name": "Comoros", "population": 683000  },
{"name": "Djibouti", "population": 834000  },
{ "name": "Eritrea", "population": 5741000},
{ "name": "Ethiopia", "population": 87095000},
{ "name": "Kenya", "population": 40909000  },
{"name": "Madagascar", "population": 21080000  },
{"name": "Malawi", "population": 15014000  },
{"name": "Mauritius", "population": 1231000  },
{"name": "Mayotte", "population": 204000  },
{"name": "Mozambique", "population": 23967000  },
{ "name": "Réunion", "population": 845000  },
{"name": "Rwanda", "population": 10837000  },
{"name": "Seychelles", "population": 91000},
{"name": "Somalia", "population": 9636000},
{"name": "South Sudan", "population": 9941000},
{ "name": "Uganda","population": 33987000},
{"name": "United Republic of Tanzania", "population": 44973000},
{"name": "Zambia", "population": 13217000},
{"name": "Zimbabwe", "population": 13077000  },{
"name": "Middle Africa", "population": 124978000  },
{"name": "Angola", "population": 19549000}
]

dataType: any[] = [
  {"name": "CWA 1","currny": ''},
  {"name": "CWA 2","currny": 300},
  {"name": "CWA3","currny": 105},
  {"name": "CWA4","currny": 205},
  {"name": "CWA5","currny": 35},
  
];


  getCSS(flag:string){
    let cssClasses ;
    if(flag=='nightMode'){
      cssClasses ={
        'one':1,
        'two':2

      }
    }else{
      cssClasses ={
        'three':3,
        'four':4

      }
return cssClasses
    }


  }

  
 constructor( private FormService:FormService, private _Service:ServiceService) { }
  ngOnInit() {
    this.getMyData();
    this._Service.behaves.subscribe((data)=>
      this.behaviour = data
    )

  } 
  birthday = new Date(1975,10,30)




  getMyData(){
    this.FormService.getmyApi().subscribe((data) => {
       this.myData = data;
      //this.myData = data;
     })
  }
 couter:number = 0
  data(abc){
    this.couter = abc;
    this.behaviour = abc
  //console.log(abc)
  }

  addStyles(){
  let Style = {
    'font-weight': this.isBold ? 'normal ' : 'normal',
    'color': this.isBold ? 'blue ' : 'blue',
    'font-size.px': this.fontSize


  }
  return Style

}
ages = [32, 33, 16,18,15,12,16,25,32,18, 40];
myArr = ["Raushan","Ashok","Raushan","Deeipk","Rajkesh","Sanjay","Ashok"];



// the output is = 5.57

}
