import React from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
import {Navigation} from './navigation.js'
import {Home,About,Contact,ElectionWraper} from './homewidge.js'
/* import { ElectionWraper } from "./ElectionWraper"; */
import {Lifecycle} from './lifecycle'
//import 	Counter from './counter'
import {BrowserRouter as Router, Switch,Route,NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {anotherAction,addWishes} from './actions/actions.js'
import UserList from './container/userlist';
import{ ParentComponent} from './container/parent'


function App(props) {
const myA = props.myArr.map((item,index) => {
	return <li key={index}>{item}</li> 
	});

	
	return (
	  <Router>
		<div className="App">
		<Navigation />
		<ul className="tab">
			<li><NavLink to={'/'} activeClassName="active"> Continents </NavLink ></li>
			<li><NavLink to={'/contact'} activeClassName="active">Contacts</NavLink ></li>
			<li><NavLink to={'/about'}  activeClassName="active">About</NavLink></li>
		</ul>
		<ParentComponent />
			
		<ElectionWraper /> 
		

		<h1>{props.myname} </h1>
			
			<UserList />
			<Lifecycle brand="ford"/>
		<ul>
		{myA}
		</ul>
		<button onClick={()=> props.changeName("Dainikbhaskar")}>Change the name of props</button>
		<button onClick={()=> props.addWishe()}>Change the Arrays</button>
		
		<Switch>
		 <Route exact path='/' component={Home} />
		 <Route  exact path='/About' component={About} />
		 <Route exact path='/Contact' component={Contact} />
		</Switch>
		</div>
		</Router>
	  );
}

const mapStatetoProp = (state) => {
		return{
			myname:state.name,
			myArr:state.wishes,
			users: state.userArray
		}
}
const mapDispatchtoProp = (dispatch)=> {
	return{
		changeName:() => {
			//dispatch(anotherAction{type:'CHANGE_NAME',payload: name})
			dispatch(anotherAction())
		},
		//addWishe: () => {dispatch(addWishes()) or
		addWishe: function(){
			dispatch(addWishes())
		}
	}
}
export default connect(mapStatetoProp,mapDispatchtoProp)(App);
