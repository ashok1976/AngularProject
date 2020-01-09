import React, {Component} from 'react';
//import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {couterIncrement,couterDecrement} from '../actions/actions';
/* const initialList = [
  { id: 'a', name: 'Learn React' },
  { id: 'b', name: 'Learn Firebase' },
  { id: 'c', name: 'Learn GraphQL' },
]; */


class UserList extends Component{
	
	constructor(){
		super()
		this.state ={
				current: 0
		}
		this.currMethord = this.currMethord.bind(this);
		//this.handleClick = this.handleClick.bind(this)
		

	}

/*	
increment = () => {
	if(this.props.counts >= 1 && this.props.counts < 10){
		this.props.dispatch(couterIncrement())
	}
}

decrement = () => {
	if(this.props.counts > 1){
	 	this.props.dispatch(couterDecrement())
	}
}

				<button onClick={this.increment}> + </button>				 
				<button onClick={this.decrement}>-</button>
		
*/

currMethord(){
		var val = this.state.current;
		this.setState({current: val + 1})
		
	//this.state({current: this.state.current +  1})
	
	}

counterUp = event => {
	if(this.props.counts >= 0 && this.props.counts < 10){
			this.props.increments()
		}
}
counterDown = event => {
	if(this.props.counts > 1){
	 	this.props.decremented()
	}
}
			
static getDerivedStateFromProps(prevProps, nextProps){
	
	if(prevProps.current !== nextProps.current){
			return {current: nextProps.current}
		}else{
		return null
	}
}			

			
	render(){
	
			return(
			<div>
			
				<h1>{this.props.counts}</h1>
					{this.state.current} ========
					<button onClick ={this.currMethord}> ======= currnt ====== </button>
			
				<button onClick={this.counterDown}>-</button>
				<button onClick={this.counterUp}>+</button>
				
				

				</div>
				
			);
		
	}
}

function mapStatetoProps(state){
	
	return{
		counts:state.myCouter
		
	}
	
}

function mapDispatchtoProp(dispatch){

		return{
			increments : function(){
				dispatch(couterIncrement())
				},
				decremented : function(){
					dispatch(couterDecrement())
				}
		}
	
}



export default connect(mapStatetoProps,mapDispatchtoProp)(UserList)

