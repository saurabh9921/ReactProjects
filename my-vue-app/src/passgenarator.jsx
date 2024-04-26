import {useState ,useCallback,useEffect,useRef} from 'react'
function Generator(){
const [length ,setLength]=useState(8)
const [number ,setNumber]=useState(false);
const [char ,setChar]=useState(false)
const [password, setPassword]=useState("")
const passref=useRef(null)
const passwordGenarator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number)str+="0123456789"
    if(char) str+="!@#$%^&*(){}[]~?/+-_`"
    for(let i=1 ; i<length;i++){
        let genpswd=Math.floor(Math.random() * str.length +1 )
        pass+=str.charAt(genpswd)
       
     
    }
    
  setPassword(pass)
 
},[length, number,char,setPassword])
const copyPassword=useCallback(()=>{
    passref.current.select()
    window.navigator.clipboard.writeText(password)},[password])
useEffect(()=>{ passwordGenarator()},[length,number,char,passwordGenarator])
    return(
        <>
        <h1 align="center">Password Generator</h1>
        <b>Generate password</b>
        <div><input type='text' placeholder='password' value={password} readOnly ref={passref} />
        <button onClick={copyPassword}>copy</button>
        </div>
        <div>
        <input type='range' min={6} max={100} value={length} onChange={(e)=>{setLength(e.target.value)}}/>
        <label>length:{length}</label>
        </div>
        <div>
        <input type='checkbox' defaultChecked={number} onChange={()=>{setNumber((prev)=>!prev); }} />
        <label>Numbers:</label>
        
        <input type='checkbox' defaultChecked={char} onChange={()=>{setChar((prev)=>!prev); }} />
        <label>Characters:</label>
        </div>
        </>
    )
}
export default Generator