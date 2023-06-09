"use client";
import {useState} from "react"

export default function Talk (){
    const [activeIndex, setActiveIndex] = useState()
    return (
        <div className="bg-[#DBC1AD] w-[40%]">
            <h2>I am a STATE in a PARENT component.</h2>
            <Greet
            isActive={activeIndex === 0}
            onShow={()=>setActiveIndex(0)}>
                hello
            </Greet>
            <Greet
            isActive={activeIndex === 1}
            onShow={()=>setActiveIndex(1)}>
                hello
            </Greet>

        </div>
    )
};

function Greet({title,children,isActive,onShow}){
    return(
        <>
        <h3>{title}</h3>
        {isActive?(
            <p>{children}</p>
        ):(
            <button onClick={()=> onShow(true)}>show</button>
        )}
        </>
    )
}
