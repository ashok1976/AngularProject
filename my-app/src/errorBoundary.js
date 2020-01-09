import React,{Component} from 'react'
export class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
    }
   state = { 
      hasError: false
    };
  static  getDerivedStateFromError(error){
    return {
        hasError:true
    }

  }
      
    render() {
        if(this.state.hasError){
            return <h1>Something went Wrong</h1>
        } 
        return this.props.children
    
  }
  
}