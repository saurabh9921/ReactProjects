import { useState } from "react"
function ColorChange(){
    const [color, setcolor]=useState("")
   
 //let counter=15
 //react hook
 const [counter,setCounter]=useState(15)
 const advalue=()=>{
  //counter+=1
 if(counter<25)
   setCounter(counter+1)
  //console.log(counter)
  }
 const removvalue=()=>{
  // counter-=1
  if(counter>0)
  setCounter(counter-1)
  // console.log(counter)
  }

  return(
    <>
  <h1>saurabh`s count {counter}</h1>
  <p>one more{counter}</p>
  <button onClick={advalue}>add value</button>
  <br />
  <button onClick={removvalue}>remove value</button>
  </>
  )
  }
  export default ColorChange