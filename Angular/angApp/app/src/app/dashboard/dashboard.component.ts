import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit, ViewContainerRef, AfterViewChecked } from '@angular/core';
import { SimplePipe, DefaultPipe, NewFilter} from './default.pipe'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit, AfterViewChecked {
  dynamicTabs;data;games;characters;listofstudent

@ViewChild('template',{read:TemplateRef,static:false}) _template:TemplateRef<any>
@ViewChild('vc',{read: ViewContainerRef, static:false}) vc: ViewContainerRef;
notFind:boolean = false
dropdown:boolean = false;
people = {company:'Dainikbhaskar'}
  constructor( ) { }

  ngOnInit() {
    this.dynamicTabs = ["tab1","tab2","tab3"];
    this.data = [
      {id: 1, url:'http://i3.dainikbhaskar.com/thumbnails/116x87/web2images/divyamarathi.bhaskar.com/2019/09/02/0521siddhivinayak_1567402346.jpg', des:"In earlier blog posts we had seen simplistic scenario of using pipes"},
      {id: 2, url:'', des:"Below is the grid for displaying list of persons and as you type in the something in multiple filters like name,"},
      {id: 3, url:'http://i3.dainikbhaskar.com/thumbnails/116x87/web2images/divyamarathi.bhaskar.com/2019/09/02/dagadu-sheth_1567403266.jpg', des:"For creating custom pipes you need to create class that implements PipeTransform Interface, this class is then decorated with @Pipe decorator."},
     
    ]
   this.games = [
      {
          "gameId": 1,
          "gameName": "Castlevania",
          "gameCode": "AAA-0101",
          "releaseDate": "September 26, 1986",
          "description": "Action-adventure game series created and developed by Konami.",
          "price": 19.99,
          "thumbRating": 5.0,
          "imageUrl": "http://i10.dainikbhaskar.com/thumbnails/891x770/dainikbhaskar2010/images/money_default.jpg"
      },
      {
          "gameId": 2,
          "gameName": "Dr Mario",
          "gameCode": "AAA-1100",
          "releaseDate": "July 27, 1990",
          "description": "Action puzzle game produced by Gunpei Yokoi and published by Nintendo.",
          "price": 15.99,
          "thumbRating": 3,
          "imageUrl": "http://i10.dainikbhaskar.com/thumbnails/891x770/dainikbhaskar2010/images/money_default.jpg"
      },
      {
          "gameId": 3,
          "gameName": "Kid Icarus",
          "gameCode": "AAA-0048",
          "releaseDate": "December 19, 1986",
          "description": "Kid Icarus revolves around protagonist Pit's quest for three sacred treasures.",
          "price": 20.99,
          "thumbRating": 4,
        
          "imageUrl": "http://i10.dainikbhaskar.com/thumbnails/891x770/dainikbhaskar2010/images/money_default.jpg"},
      {
          "gameId": 4,
          "gameName": "Legend Of Zelda",
          "gameCode": "AAA-0049",
          "releaseDate": "February 21, 1986",
          "description": "Link is often given the task of rescuing Princess Zelda and the kingdom of Hyrule from Ganon.",
          "price": 29.95,
          "thumbRating": 5,
          "imageUrl": "http://i10.dainikbhaskar.com/thumbnails/891x770/dainikbhaskar2010/images/money_default.jpg"
      },
      {
          "gameId": 7,
          "gameName": "Super Mario Bros",
          "gameCode": "AAA-3325",
          "releaseDate": "September 13, 1985",
          "description": "Mario finds power-ups and items that give him special magic powers such as fireball-throwing and size-changing into giant and miniature sizes.",
          "price": 40.95,
          "thumbRating": 5,
         
      }
  ];
this.characters = [
    'Finn the human',
    'Jake the dog',
    'Princess bubblegum',
    'Lumpy Space Princess',
    'Beemo1',
    'Beemo2'
  ]
this.listofstudent = [
            {id:"1", name:"icha",age:"20"},
            {id:"2", name:"denok",age:"23"},
            {id:"3", name:"sri utami",age:"10"},
            {id:"4", name:"mbok darmi",age:"40"},
            {id:"5", name:"jeniffer",age:"30"},
            {id:"6", name:"limbuk",age:"22"}
          ];

  }

ngAfterViewInit(){
/*   const view = this._template.createEmbeddedView({fromContext: 'John'});
  console.log(view)
  this.vc.insert(view); */

}
ngAfterViewChecked() {
//  console.log(  this.vc.createEmbeddedView(this._template, {fromContext: 'John'}))
}
}
