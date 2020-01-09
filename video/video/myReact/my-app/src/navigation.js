import React,{Component} from 'react'
import {DetailStudent} from './Student'

export class Navigation extends Component{
    constructor(props){
      super(props)
          this.state = { isActive:'',showMenu:false,numOfClicks: 0}   
    }

  handleButtonClicked = id => {
    this.setState({showMenu: id });
  };

  handleButtonOut = id =>{
    this.setState({showMenu: id})
  }

  render() {
    this.handleButtonClicked = this.handleButtonClicked.bind(this)
      const myArray = ["World","U.S.","Politics","N.Y.","Business","Opinion","Tech","Science","Health","Sports","Arts","Books","Style","Food","Travel","Magazine","T Magazine","Real Estate","Video"]
      const data = myArray.map((val,index) => 
          <li className={this.state.showMenu == index ? 'show' : ''} key={index} data-mode={val} onClick={() => this.handleButtonClicked(index)}>
        {val + this.state.numOfClicks}</li>);

          return( 
            <nav className="navigation">
              <ul>
                {data}
              </ul>
              <DetailStudent disc={this.state.numOfClicks} />
            </nav>

          )
    
        
        }

}




