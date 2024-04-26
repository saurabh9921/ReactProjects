import { useState } from "react"
function Chai(){
    const [color, setcolor]=useState("")
    return(
       <>
       <div style={{backgroundColor:color }}>
       <h1>color changing code</h1>
       <div >
        <button onClick={()=>setcolor("red")}>red</button>
        <button onClick={()=>setcolor("green")}>green</button>
        <button onClick={()=>setcolor("yellow")}>yellow</button>
        <button onClick={()=>setcolor("tomato")}>tomato</button>
       </div></div>
      </>
    )
}
export default Chai