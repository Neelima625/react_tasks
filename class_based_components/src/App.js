import React from "react"
// import Child from "./child"
// class App extends React.Component{
//   render(){
//     const details={
//       name:"neelima",
//       skills:{
//         skill1:"js",
//       skill2:"react"
//       }
//     }
//     const data=[{id:1,p_name:"laptop",cost:45550},{id:1,p_name:"laptop",cost:55000}]
//     return(
//       <div>
//         <h1>{details.skills.skill1}</h1>
//         {data.map(item=>{
//           return(
//          <Child p_n={item.p_name} cost={item.cost} />
//           )
//         })}
//       </div>
//     )
    
//   }
// }
// export default App;


 
class App extends React.Component{
  constructor(){
    super()
    this.state={
      count:10,
      loginShow:false,
       color:"green"
    }
  }
  dec=()=>{
    this.setState({
      count:this.state.count-1
    })
  }
  inc=()=>{
    this.setState({
      count:this.state.count+1
    })
  }

  render(){
    
    return(
      <div>
        <button onClick={this.dec}>-</button>
        {this.state.count}
        <button onClick={this.inc}>+</button><br/>
        <button onClick={()=>this.setState({loginShow:!this.state.loginShow})}>Login</button>
       {
        this.state.loginShow &&  <div style={{backgroundColor:this.state.color}}>
        <input/>
        <input/>
        <input/>
        <input/>
        <button onClick={()=>this.setState({color:this.state.color="red"})}>red</button>
        <button onClick={()=>this.setState({color:this.state.color="purple"})}>purple</button>
      </div>
       }
      </div>
    )
  }
}
export default App