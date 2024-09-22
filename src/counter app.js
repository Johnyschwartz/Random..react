import { useState } from "react"

function Com(){
   const [ans,setans]=useState()
   function add()
   {
    setans(Math.floor(Math.random()*10)+1)
   }
 return(
    
    <div> 
    <button onClick={add}>Random Number</button>
    <h1>Random Number is :{ans} </h1>
    </div>
   
 )
}
export default Com