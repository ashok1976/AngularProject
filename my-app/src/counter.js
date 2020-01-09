import React from 'react';
import {connect} from 'react-redux';
import {anotherAction,addWishes,counts} from './actions/actions.js'

function Counter({count,dispatch}){
	return(
	<div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
	)
	
	
}
const mapStatetoProps = state =>{
	return{
		count:state.count
		}
	
}
export default connect(mapStatetoProps)(Counter)
