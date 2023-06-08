// import {Discuss} from "@/components/discuss";
"use client";
import {useState} from "react"

function Panel ({title, children}){
   const [active, setActive] = useState(false);
   return(
    <section>
      <h3>{title}</h3>
    </section>
   )
}

export default function Home() {
  const [count, setCount] = useState("")
  return (
   <div className="bg-red-400">
    {/* <Discuss/> */}
    hello
   </div>
  )
}
