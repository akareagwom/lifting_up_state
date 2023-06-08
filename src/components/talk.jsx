"use client";
import {useState} from "react"

export default function Talk (){
    const [activeIndex, setActiveIndex] = useState()
    return (
        <div className="bg-[#DBC1AD] w-[40%]">
            <h2>I am a STATE in a PARENT component.</h2>
            
        </div>
    )
}