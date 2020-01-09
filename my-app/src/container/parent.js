import React,{Component } from 'react';


export class ParentComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            myArray : [1,2,3,4,5,6,7,8],
            data : null
 
        }
        this.callbackParent = this.callbackParent.bind(this) 
    }
   
    callbackParent = (childData) => {
        console.log('receive data from child'+childData)
        this.setState({data: childData})
    }

    render(){
        return (

            <div>
                <ChildComponent  title="ChildComponent Data" callBack={this.callbackParent} />
                Hello India
                
                </div>

        )
    }


}
export class ChildComponent extends Component{

    constructor(props){
        super(props)
        this.state ={
            isToggle: false,
             myArray : [],
            childern:[],
            parents:[],
          

        }
        this.myRefs = React.createRef();
	
		this.callBack = this.callBack.bind(this)
    }
    callBack = ()=>{
      // let setToggle = !this.state.isToggle;
      // this.props.callbackParent(this.state.isToggle)
            this.setState({isToggle: !this.state.isToggle}, ()=>{
              //this.props.callbackParent(this.isToggle)
            }); 

    }
componentDidMount(){
    fetch('https://cldaws.bhaskar.com/event/ttl10s/all-state-tally/521/2019/')
       .then(res => res.json())
       .then((result) =>{
       // this.setState({ parents: 'ads'})
        
          let parent = [];
           var myData = Object.keys(result.data[0].stateTally).map(function(item) {
                parent.push(result.data[0].stateTally[item].parent);
                return{
                    childern: result.data[0].stateTally[item].childern,
                    parents: parent
                }
            });
             let myDatas = Object.values(myData);
            for(let i=0; i<myDatas.length; i++){
                    this.setState({childern:myData[i].childern});
                } 
             this.setState({ parents:myData[0].parents});
         })
}               

        
  
  
  render(){
    const  {parents,childern} = this.state;
    let p = Object.entries(parents).map(([idx,val]) => (
        <div className="innerRow" key={idx}> 
           <div className="tallyCall callOne"  id={idx} onClick={this.handleClicks} ref={idx}>
               <span className="roundSymbol"><img src={ val.image} alt="1" /></span>
               { val.name}<i className="circle"></i>
           </div>
           <div className="tallyCall callFour">{ val.kul_seat}<span>({ val.diff})</span></div>							
           <div className="tallyCall callFive">{ val.vote_per}({ val.vpdiff})</div>
       </div>
      
         ))
        

    var child =  this.state.childern.map((item,index)=>{
        console.log(item+"::")
          return <section key={index} className="tallyAlliances">
                        <div className="tallyRow">
                            <div className="innerRow">				  
                                <div className="tallyCall callOne">{item.name} </div>
                                <div className="tallyCall callFour">{item.kul_seat} <span >({item.diff})</span></div>								
                                <div className="tallyCall callFive"> {item.vote_per}({item.vpdiff}) </div>
                            </div>
                        </div>
                    </section>
              //console.log(index+'::'+item.name)
         })  
 
  


        return(
            <>
           
                <button onClick={this.callBack}>Toggle</button>
                    {/* element */}
                <ul style={{display:this.state.isToggle ? 'block':'none'}}>
                    <li ref={this.myRefs}>return  {this.state.myArray}</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>

                </ul>
              
                <div className='tallyRow' >
              { }
             
                    
                    {p}
                    {child}
                    
                    
                  
           </div>
            </>
        )
    }
}
