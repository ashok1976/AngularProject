import React,{Component} from 'react';
export class Lifecycle extends Component{
	constructor(props){
		super(props)
		this.state = {
				name : 'Ashok',counter:0,visible:true,path: 'dainikbhaskar',
				componentLifecyclePhase: ['Inital Phase', 'Mount Phase','update Phase', 'Unmount Phase']
				}
		//this.handleClick = this.handleClick.bind(this)
	}
static getDerivedStateFromProps(nextProps, prevState) {
			if(nextProps.visible === true && prevState.visible === false){
				console.log("state ------ : "+ nextProps.counter + " :: " + prevState.counter)
			}
			return {
				visible:prevState.visible
			}
 }
componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!' +prevProps.brand)
   }
//this.state.componentLifecyclePhase.map( lifePhase =>  <li>{lifePhase}</li>)
	handleClick(){
			/*
			let val = this.state.counter + 1;
			this.setState({ counter: val},() => {
				console.log('Container setState callback  is called' + val);
				
				})
			*/
			this.setState((prevState, props) => {
					return {counter:  prevState.counter + 1};
				});
	}
	 render(){
		const phase =this.state.componentLifecyclePhase.map( (lifephase,i) => <li key={i}>{lifephase}</li>)
		return(
			<div>
			 <p>The counter in App is {this.state.counter}</p>
			 <button onClick={this.handleClick.bind(this)}>Button</button>
			<ul className="">
				{phase}
			</ul>
			{this.state.name}++
		</div>
		)
	};
}