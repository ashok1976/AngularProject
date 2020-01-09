import React,{Component} from 'react'; 
export class Navigation extends Component{ 
  constructor(props){
		super(props);
		this.state ={
		menu: ['Instagram','Hindustan','Navbharattimes','Jagran'],
		items:[
			{id:1,name: "Bhaskar.com", url:"bhaskar.com"},
			{id:3,name: "Sandro-Orange - 1",  url:"saksfifth.com"},
			{id:4,name: "Sandro-Orange- 2",  url:"saksfifth.com"},
			{id:6,name: "The Kooples - 1",  url:"bloomingdales.com"},
			{id:7,name: "The Kooples - 2",  url:"bloomingdales.com"}
			]
		}
	}
   render(){
	 let content = this.state.items.map((item,index) =>{
		let cls = (index === 0) ? 'active' : ''
		return <li  key={item.name} className={cls}>{item.name}</li>
		 
		
	 });
	   
	 return(
	 <nav>
		<ul>
		{content}
		</ul>
      </nav>
      )
  }
}


export class Student extends Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }

 export class DetailStudent extends Component {
 
    render() {
      return <div><h1>Helloddddddddddd, 1 {this.props.name}, sadas {this.props.numOfClicks}</h1></div>;
    }
  }
