import React, { Component } from 'react';
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
const data = [
{"id": 1, "name": "Hello Kitty", 
    "items": [
        {"id": 2,"name": "Kitty Muu Muu"},
        {"id": 3,"name": "Kitty smack"}
    ]
},
{"id": 4,"name": "Hello Pussy","items": [
    {"id": 5,"name": "World","items": [     {"id": 6,"name": "Hello Pussy world"}]
}]
}];
*/
export class ElectionWraper extends Component {
	render() {
		return (<div className="elWrapper">
			<div className="vidhanshaba">विधानसभा चुनाव नतीजे 2019</div>
			<div className="electionGray">

			</div>

		</div>);
	}
}


// http://stackoverflow.com/questions/39630543/on-click-of-a-button-made-in-one-component-is-not-changing-value-in-other-compon/




var Button = React.createClass({
  handleClick: function() {
	console.log('1. Received click in Button');
	this.props.passClick();
  },
  render: function() {
	return (
	  <button onClick={this.handleClick} >+1</button>
	)
  }
});

    var Counter = React.createClass({
      render: function() {
        return (<div>Hello {this.props.updValue}</div>);
      }
    });

    var App = React.createClass({
      getInitialState: function() {
        return {
          count: 0
        };
      },
      increment: function() {
        this.setState({
          count: this.state.count + 1
        });
        console.log('2. Received click in App');

      },
      render: function() {
        return (
          <div>
            <Button passClick={this.increment}/>
            <Counter updValue={this.state.count}/>
          </div>
        );
      }
    });
import React from 'react';

class ParentComponent extends React.Component {
     constructor(props) {
        super(props);
        this.state = {
           isClicked: true
        }
     }

      handleClick = () => {
         this.setState({
           isClicked: true
         });
     }

     render() {
        return({<button onclick='handleClick()'>Click</button>
                <ChildComponent isClickedFromParent={this.state.isClicked} />
                });
     }
}

import React from 'react';

class ChildComponent extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
             isClickedInChild: this.props.isClickedFromParent
          }
      }

      render(){
           return(<div>{this.props.isClickedInChild}</div>);
      }
}

///****************************************Child to Parent ************************************************

import React from 'react'; 

class ParentComponent extends React.Component {
       constructor(props) {
           super(props);
           this.state = {
               isClicked: true
           }
       } 

       callbackHandlerFunction = (clickStatus) => {
           this.setState({
                isClicked: clickStatus
           });
       }

       render() {
           return({<ChildComponent handleClickInParent={this.callbackHandlerFunction} /> });
       }
}

import React from 'react'; 

class ChildComponent extends React.Component {
        constructor(props) {
             super(props);
             this.state = {
                   isClicked: false
             }
        } 

        handleClick = () => {
             this.setState({
                  isClicked: true
             });
             this.props.handleClickInParent(true);
        }

        render(){
             return(<button onclick='handleClick()'>Click</button>);
        }
}
///********************************Sibling to Sibling *******************************************
// ChildComponent => ParentComponent => AnotherChildComponent
