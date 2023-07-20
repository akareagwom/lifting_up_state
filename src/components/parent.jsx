"use client";
import { useEffect, useState } from "react";
import Child from "./child";
import logo from '../assets/bg.avif'
import { Link } from "react-router-dom";


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
        <div className=" h-screen bg-white">
        
        <button onClick={handleClick}>click</button>
        <p>{name}</p>
        <button onClick={handle}>click me</button>
        <h1>{count}</h1>
        <div className="bg-[url('../assets/frame.avif')] flex ml-[34%] rounded justify-center brightness-50 w-[30%] h-[70vh] p-10">
        <form className="block w-[90%] mt-[30%] text-black" action="">
            <input className=" m-2 p-[5px] rounded  " type="email" />
            <input className=" m-2 p-[5px] rounded  " type="password" />
            <Link to='/App' >
            <button className="bg-green-700 py-[5px] px-[20px] rounded ml-[30%] ">Enter</button>
            </Link>
        </form>
        </div>
        


        <div className="info">
            <Child info={info} />
        </div>
        </div>
     );
}
 
export default Parent;