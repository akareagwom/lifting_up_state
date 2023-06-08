"use client";
import {useState} from "react"

function Panel ({title, children}){
   const [active, setActive] = useState(false);
   return(
    <section>
      <h3>{title}</h3>
      {active? (
        <p>{children}</p>
      ):(
        <button className="bg-[#928490]" onClick={() => setActive(true)}>SHOW</button>
      )}
    </section>
   )
}

export default function Discuss() {
  return (
   <div className="">
    <h3 className="text-3xl text-white">state in the child component</h3>
    <div className=" bg-[#433E49] flex justify-around w-[40%]">
    <Panel  title="women" >
      Did You Know That The First Computer Programmer Was a Woman
    </Panel>
    <Panel title="men" >
      Did You Know That The Father of Computer Was a Man
    </Panel>
    </div>
    hello
   </div>
  )
}
