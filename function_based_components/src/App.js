import React ,{useState,useEffect}from 'react'

const App = () => {
  const [count,setcount]=useState(0)
  const[show,setsshow]=useState(false)

  function handleshow(){
setsshow(!show)
  }
  function inc(){
    setcount(count+1)
  }
  function dec(){
    setcount(count-1)
  }
  useEffect(()=>{fetch("https://dummyjson.com/users").then(res=>res.json()).then(res=>console.log(res)).catch(err=>(console.log(err)))})
  return (
    <div>
      <button onClick={inc} >+</button>
      {count}
      <button onClick={dec}>-</button><br/>
     <button onClick={handleshow}>signup</button>
     {show&& <form>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
      </form>}
    </div>
  
  )
}

export default App
