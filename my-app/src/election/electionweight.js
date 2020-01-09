import React, {Component} from 'React'
//import React from 'react';

/* export class ElectionWraper extends React.Component{

    render() {
        return (
          <div className="shopping-list">
            
            <ul>
              <li>Instagram</li>
              <li>WhatsApp</li>
              <li>Oculus</li>
            </ul>
          </div>
        );
      }


} */

export class ElectionWraper extends Component{
	constructor(){
		super();
	}
  render() {
    return (
        <div className="elWrapper">
         <div className="vidhanshaba">विधानसभा चुनाव नतीजे 2019</div>
		  <ul  className="list">
		  </ul>
        </div>
    );
  }
}

export class ElectionTable extends Component{
	constructor(){
		super();
	}
  render() {
    return (
        <div className="elWrapper">
         <div className="vidhanshaba">विधानसभा चुनाव नतीजे 2019</div>
		  <ul  className="list">
		  </ul>
        </div>
    );
  }
}

export class ElectionNews extends Component{
	constructor(){
		super();
	}
  render() {
    return (
        <div className="elWrapper">
         <div className="vidhanshaba">विधानसभा चुनाव नतीजे 2019</div>
		  <ul  className="list">
		  </ul>
        </div>
    );
  }
}