"use client";
import { useState } from "react";
import Child from "./child";


const Parent = () => {
    const [touch,setTouch]= useState("");
    const handle=()=>{
        setTouch(touch);
    }
    
    return ( 
        <>
        <Child />
        <button onClick={handle}>click</button>
        </>
     );
}
 
export default Parent;