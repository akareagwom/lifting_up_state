"use client";
import { useEffect, useState } from "react";
import Child from "./child";
import logo from '../assets/bg.avif'


const Parent = () => {
    let [count, setCount] = useState(2);
    const [name,setName]= useState("akare");
    const [info,setInfo]= useState([
        {name:'lily',age:2},
        {name:'rose',age:3},
        {name:'tulip',age:5}
    ]);
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');

    // useEffect(()=>{

    // },[])
    const handleClick=()=>{
        setCount(()=> count++)
        // console.log('handle')
    }
    const handle=()=>{
        setName('azikang')
    }
    
    return ( 
        <div className="bg-[url('../assets/bg.avif')] h-screen">
        
        <button onClick={handleClick}>click</button>
        <p>{name}</p>
        <button onClick={handle}>click me</button>
        <h1>{count}</h1>
        <form action="">
            <input type="email" />
            <input type="password" />
        </form>


        <div className="info">
            <Child info={info} />
        </div>
        </div>
     );
}
 
export default Parent;