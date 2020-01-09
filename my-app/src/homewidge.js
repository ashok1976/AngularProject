import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//import ReactTable from "react-table";  
//import { ErrorBoundary} from './errorBoundary'
//https://appfeedlight.bhaskar.com/webfeed/ttl5m/newsweb/521/11981/1/0/10/
export class Home extends Component{
constructor(){
	super();
	this.state = { 
				displayBio : false,
			    continents  : ['Asia','Africa','Europe','Austrilia','North America' ,'South America','Amtarctica']   
			}
		this.toggleDisplayBio = this.toggleDisplayBio.bind(this)
	}
	toggleDisplayBio(){
		this.setState({
		displayBio: !this.state.displayBio
		})
	}
	render(){
     var content = this.state.continents.map((item,i)=> 
		<li key={i}>{item}</li>
		)
   return(
			 <div className="spaceSection">
				<h2>Continent</h2>
				<ul className="list">
				{content}
				</ul>
				<div>
				{
					
					this.state.displayBio ?(<button onClick={this.toggleDisplayBio}> Show More </button> ) : 
					(<button onClick={this.toggleDisplayBio}> Show Less </button>  )
				
				}
				</div>
			</div>
			)
		
	}
}

export class About extends Component {
	constructor(){
			super();
			this.state = { 			
			    aboutListArray : [
							{name:'Php', domain:'bhaskar', id:1},
							{name:'HTML', domain:'divyabhaskar',id:2},
							{name:'React', domain:'divyamarathi.bhaskar.com',id:3},
							{name:'Angular', domain:'money.bhaskar.com',id:4},
							{name:'Angular', domain:'money.bhaskar.com',id:4}
						]
				
			}
		//	this.handleDefault = this.handleDefault.bind(this)
	}
	handleDefault(event){
		event.preventDefault();
		}
	
	 
  render(){
	const result = [];
	const map = new Map();
	  for(let item of this.state.aboutListArray){
		  if(!map.has(item.id)){
			map.set(item.id, true);    // set any value to Map
			result.push({id: item.id,name: item.name,domain: item.domain });
			}
	  
		
		}



	
	  
	const resultData = result.map((item)=>{
			return <li key ={item.id}>
			<p>{item.name}</p>
			{item.domain}</li>
		
	})
	

   
	return ( 
	     <div className="spaceSection">
			 <a  value="12" href="https://www.bhaskar.com/" onClick={this.handleDefault.bind(this)}> Click Me React</a>
          <h2>About</h2>
		  <ul className="detail">
		  {resultData}
		  </ul>
        </div>
    );
  }
}

export class Contact extends Component {
	constructor(){
		super();
		this.state = {
			myArr : [100,80, 70, 80, 90,100, 71, 80,1]
				
			
		}
		
	}
  render() {
	const finalArray = this.state.myArr.filter((item, pos,array) =>{
		return array.indexOf(item) === pos
	})
  var d = finalArray.map( (item,index)=>  <li key={index}> {item}</li>)
	    return (
        <div className="spaceSection">
          <h2>Contact</h2>
		  <ul  className="list">
		  {d}</ul>
        </div>
    );
  }
}
/*
export class Counter extends Component{
	constructor(){
	super()
	this.state = {
				count: 0
			}
			
	}
	
	
	
	render(){
		const increment = () => {
			setState({count: this.state.count + 1})
			}
		const decrement =()=>{
			setState({count: this.state.count - 1})
			}
		
		
		return(
	<div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
	)
		
	}
	
	
}

*/


export class ElectionWraper extends Component{
	
		constructor(props){
			super(props)
			this.state = {
				title : 'झारखंड',
				vidhanshaba: 'विधानसभा चुनाव नतीजे 2019',
				party:'पार्टी',
				seat:'सीटें',
				vote:'वोट',
				majority:'majority',
				tallyRow:"tallyRow",
				tallyRowOpen:"tallyRow open",
				open:false,
				message:''
			}
		//	this.clickHandler =	this.clickHandler.bind(this)
		}

		callbackChild = (childData) => {
			console.log('receive data from child'+childData)
			this.setState({message: childData})
		}

		/* clickHandler = (event)=>{
			this.refs = event.target.id;
			isOpen = event.target.id

		 	if(!this.state.open){
					this.setState({open:true, tallyRow:"tallyRow openAlliance" })
				}else{
					this.setState({open:false,tallyRow:"tallyRow" })
			} 
		}	*/ 

 render(){
	  return (
			<div className="elWrapper">
 				<div className="vidhanshaba">{this.state.vidhanshaba}</div>
				<div className="electionGray">
				<ElectionTable 	title={this.state.title} party={this.state.party} seat={this.state.seat} 
				vote={this.state.vote} majority={this.state.majority} tallyRow={this.state.tallyRow}
				
				//handleClicks={this.clickHandler} 
				sendData = {this.callbackChild}
				/>
				<ElectionNews message={this.state.message} />
				</div>
			</div>
    );
  }
}

const tally =[
	{name: "भाजपा",aage: "00",jeete: "25",kul_seat: "25",kul_seat_2014: 37,vote_percentage_2014: 35,vote_per: "33",
	color:"#fa931d",image: "https://visuals.dbnewshub.com/bhaskar/bhopal-app/elections_1574670200.04711574670200.png",
		diff: "-12",class: "downSeat",vpdiff: "-2",vclass: "downSeat", children : [
			{name:"भाजपा",aage:"00",jeete:"25",kul_seat:"25",kul_seat_2014:37,vote_percentage_2014:32,vote_per:"33",color:"#fa931d",iff:"-12",class:"downSeat",vclass:"upSeat",vpdiff:"+1"},
			{name: "निर्दलीय",aage: "00",jeete: "00",kul_seat: "00",kul_seat_2014: 0,vote_percentage_2014: 0,vote_per: "0",color: "#fa931d",				diff: "",
				class: "",vclass: "",vpdiff: "0"}
			

		]
	},{name: "कांग्रेस+",aage: "00",jeete: "47",kul_seat: "47",kul_seat_2014: 25,vote_percentage_2014: 31,vote_per: "36",color: "#02557d",
	image: "https://visuals.dbnewshub.com/bhaskar/bhopal-app/elections_1574670215.61711574670215.png",diff: "+22",class: "upSeat",vpdiff: "+5",vclass: "upSeat",children :[
		{name:"कांग्रेस",aage:"00",jeete:"16",kul_seat:"16",kul_seat_2014:6,vote_percentage_2014:10,vote_per:"14",color:"#02557d",diff:"+10",class:"upSeat",vclass:"upSeat",vpdiff:"+4"},
		{name:"झामुमो",aage:"00",jeete:"30",kul_seat:"30",kul_seat_2014:19,vote_percentage_2014:21,vote_per:"19",color:"#02557d",diff:"+11",class:"upSeat",vclass:"downSeat",vpdiff:"-2"},
		{name:"राजद",aage:"00",jeete:"01",kul_seat:"01",kul_seat_2014:0,vote_percentage_2014:0,vote_per:"3",color:"#02557d",diff:"+1",class:"upSeat",vclass:"upSeat",vpdiff:"+3"}
	]
	},{name:"अन्य",aage:"00",jeete:"09",kul_seat:"09",kul_seat_2014:19,vote_percentage_2014:34,vote_per:"31",color:"#737476",
	image:"https://visuals.dbnewshub.com/bhaskar/bhopal-app/elections_1574670500.51531574670500.png",diff:"-10",class:"downSeat",vpdiff:"-3",vclass:"downSeat", 
		children :[
			{name:"झाविमो",aage:"00",jeete:"03",kul_seat:"03",kul_seat_2014:8,vote_percentage_2014:10,vote_per:"5",color:"#737476",diff:"-5",class:"downSeat",vclass:"downSeat",vpdiff:"-5"},
			{name:"आजसू",aage:"00",jeete:"02",kul_seat:"02",kul_seat_2014:5,vote_percentage_2014:4,vote_per:"8",color:"#737476",diff:"-3",class:"downSeat",vclass:"upSeat",vpdiff:"+4"},
		]
	},
	{name:"other ",aage:"00",jeete:"09",kul_seat:"09",kul_seat_2014:19,vote_percentage_2014:34,vote_per:"31",color:"#737476",
	image:"https://visuals.dbnewshub.com/bhaskar/bhopal-app/elections_1574670500.51531574670500.png",diff:"-10",class:"downSeat",vpdiff:"-3",vclass:"downSeat"},
	{name:"other 2",aage:"00",jeete:"09",kul_seat:"09",kul_seat_2014:19,vote_percentage_2014:34,vote_per:"31",color:"#737476",
	image:"https://visuals.dbnewshub.com/bhaskar/bhopal-app/elections_1574670500.51531574670500.png",diff:"-10",class:"downSeat",vpdiff:"-3",vclass:"downSeat"}
] 



 export class ElectionTable extends Component{
	isOpen= null;
	 constructor(props){
			super(props)
			this.state={
				height:10,
				tallyRow : 'tallyRow',
				tallyRowOpen : 'tallyRow open',
				isLoaded:false,
				tblData:{},
				obj:null
			}
			this.refCallback= React.createRef();
			this.ref = React.createRef();
			this.handleClicks = this.handleClicks.bind(this);
			this.sendData = this.sendData.bind(this);
			this.tallyRow = 'tallyRow';
			this.tallyRowOpen = 'tallyRow open'
			

}

	

	handleClicks(event){
		let id = event.target.id;
		this.isOpen = id
		this.sendData();
	} 
	sendData = () => {
		setTimeout(() => {
		var data = this.refCallback.current.offsetHeight;
		this.props.sendData(data);
	}, 100);
	}


classNames(classes) {
	return Object.entries(classes)
	  .filter(([key, value]) => value)
	  .map(([key, value]) => key)
	  .join(' ');
}
componentDidMount(){
	fetch('https://cldaws.bhaskar.com/event/ttl10s/all-state-tally/521/2019/')
	.then(res => res.json()).then((result,index) =>{
				this.setState({isLoaded: true, obj: result.data[0].stateTally, tblData : result.data[0].stateTally})
			}).catch(console.log())
	}
render(){
	const {Open} = this.state
	const { isLoaded, tblData,obj } = this.state;
//	for (let [k,v] of Object.entries(tblData)) {
		



		const data = Object.values(tblData);
	
	
		var myL = data.map((val,index)=>{ 	
			//console.log(val.childern)
		
			
			//	console.log(obj)
			//console.log(val.children)
		 var liClasses = this.classNames({
			'tallyRow' : true,
			'openAlliance':  this.isOpen == index
			});
		//	var myClick = val.children ? (this.handleClicks) :'';		
			return <div className={liClasses}  key={index}  id={index} ref={index}>
				<div className="innerRow"> 
					<div className="tallyCall callOne"  id={index} onClick={this.handleClicks} ref={index}>
							<span className="roundSymbol"><img src={ val.parent.image} alt="1" /></span>
							{ val.parent.name}<i className="circle"></i>
					</div>
					<div className="tallyCall callFour">{ val.parent.kul_seat}<span>({ val.parent.diff})</span></div>							
					<div className="tallyCall callFive">{ val.parent.vote_per}({ val.parent.vpdiff})</div>
				</div>
				
				{Array.isArray(val.children) ? Array.isArray(val.children).map((item,i)=>{
					return <section key={i} className="tallyAlliance">
						<div className="tallyRow">
					<div className="innerRow">						  
					<div className="tallyCall callOne">	
								{val.children[i].name}
					</div>
					<div className="tallyCall callFour">
									{val.children[i].kul_seat}
									<span >({val.children[i].diff})</span>
						</div>								
					<div className="tallyCall callFive">
						{val.children[i].vote_per}
						({val.children[i].vpdiff})
						</div>
				</div></div>
				</section>

			}) :''}
		</div> 
		 
	})

//}

	
return (
		<div className="tw50">
			<div className="tallySection" ref={this.refCallback}  onClick={this.sendData}>
				<div className="topTable">
					<div className="tallyLHS">{this.props.title} </div>
					<div className="tallyRHS">{this.props.party}: 81 |  {this.props.majority}: 41</div>
				</div>
				<div className="tallyTable">							
					<div className="tallyRow tallyBg">
						<div className="innerRow">							  
							<div className="tallyCall callOne">{this.props.party}</div>
							<div className="tallyCall callFour">{this.props.seat}</div>								
							<div className="tallyCall callFive">{this.props.vote} %</div>
						</div>
					</div>
				
					{myL}		
				</div>
			</div>
		</div>
    );
  }
}
//https://www.javascriptstuff.com/component-communication/

export class ElectionNews extends Component{
	constructor(){
		super();
		this.state ={
			news : [],
			isLoaded: false,
		}
	}
	componentDidMount(){
		this.displayNews();
		}
	
	displayNews(){
	fetch('https://appfeedlight.bhaskar.com/webfeed/ttl5m/newsweb/521/11981/1/0/10/').then(
			res => res.json()).then((response)=>{
			this.setState({news:response.data.story})
		})
	}
  render() {

	const myNews = this.state.news.map((val,index) => <li key={index}><span>{val.iitl_title} / </span>{val.title}</li>)
	const mystyle = {height: this.props.message };
    return (
		<div className="tw50">
			<div className="tallySection" style={mystyle}  >
				<div className="topTable">
					<div className="tallyLHS">चुनाव न्यूज़ </div>
					<div className="tallyRHS">MORE</div>
					
				</div>
				<ul  className="electionNews" >{myNews}</ul>
			</div>
		</div>
    );
  }
} 


//https://cldaws.bhaskar.com/event/ttl10s/election-candidatecomparedata/521/2019/11/
//https://cldaws.bhaskar.com/event/ttl10s/election-candidatedata/521/0/200/
//https://cldaws.bhaskar.com/event/ttl10s/all-state-tally/521/2019/
//https://cldaws.bhaskar.com/event/ttl10s/all-state-tally/521/2019/
//https://appfeedlight.bhaskar.com/webfeed/ttl5m/newsweb/521/11981/1/0/10/


