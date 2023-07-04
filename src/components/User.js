import React,{useState} from "react"


const User=(props)=>{
    const[count,setCount]=useState(0)

    const Increment=()=>{
        setCount(count+1)
    }

  return(
    <>
    <h1>Count in FC: {count}</h1>
    <button onClick={Increment}>click</button>
    {/* <button onClick={()=>setCount(count+1)}>Click</button> */}
    <h2>Name: {props.name}</h2>
    <h2>Email:{props.email}</h2>
    <h2>Designation:{props.designation}</h2>
    </>
  )
}

export default User