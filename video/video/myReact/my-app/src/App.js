import React, { Component } from 'react';
import './App.css';
import {Student,DetailStudent,MyHeader,ChildComponent} from './Student.js'
import {Navigation} from './navigation'
class App extends Component {
  render() {
    return (
      <div className="container">
      <Navigation />
        <div className="w1266">
        
        <MyHeader name="Home" />
        <Student name="Ashok Panthari" />
        <DetailStudent name="rc" />
        <ChildComponent  color="red" />
        </div>
      </div>
    );
  }
}
export default App;
