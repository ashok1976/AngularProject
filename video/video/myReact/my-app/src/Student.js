import React, {Component} from 'react'; 
export class Student extends Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }

 export class DetailStudent extends Component {
  constructor(props){
    super(props);
  }
    render() {
      return <div><h1>Helloddddddddddd, 1 {this.props.name}, sadas {this.props.numOfClicks}</h1></div>;
    }
  }

 const API = 'https://hn.algolia.com/api/v1/search?query=';
export class MyHeader extends Component{
    constructor(props){
          super(props);
          this.state = { posts: [],
            counter: 0,
            name : "Ajay", 
            message : "You are welcome to our World",
            hello : "World!",
            myclass: "hover"
          };
          this.increment = this.increment.bind(this)
          this.handleClick = this.handleClick.bind(this);
          this.decrement = this.decrement.bind(this);
          this.change = this.changeState.bind(this)
          
  }
  increment(){
   this.setState({counter : this.state.counter + 1})
  }
  handleClick(){

    const newName = this.state.name === 'Ajay' ? 'Ashok ' : 'Ajay'

    this.setState({name:newName})


   
    
  }
  decrement(){
      if(this.state.counter == 0){
        this.setState({counter:this.state.counter ? 0 : 0 })
      }else if(this.state.counter == 5){
          alert(this.state.counter)
          this.setState({counter : this.state.counter -= 1})
      }else{
        this.setState({counter : this.state.counter -= 1})
      }
    }

    componentWillMount(){ 
        console.log("componentWillMount()"); 
    } 
    changeState(){ 
        this.setState({ hello :  "Geek!" }); 
        alert()
    } 

componentDidMount(){
      fetch(API).then(res => 
        res.json()).then(result => {
          const mydata = result.hits;
          this.setState({posts: mydata})
         });
     }
     /*componentDidMount(){ 
      console.log("componentDidMount()"); 
     } */

     render() {
   var mydata = this.state.posts.map((post,i) =>
      <li key={i}>{post.title}</li>
    )
 
        return( 
        <header><ul>
            {mydata}
            </ul>
            <div  onClick={this.handleClick}>Ashok kumar ==============</div>
              <div > <span onClick={this.decrement}>-----</span> {this.state.counter} <span  onClick={this.increment}> +++ </span> </div>

              <h1> GeeksForGeeks.org, Hello{ this.state.hello }</h1> 
              <div onClick={this.change } > Change content ================================================</div> 
            </header>
        )
    }

}


export class ChildComponent  extends Component{

  constructor(props){
    super(props)
    console.log(props.color)

  }

  render(){
    return(  <div>{this.props.color}

     

    </div>

      )

  }

}

// validating prop types 







