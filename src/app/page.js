import Talk from "@/components/talk"
import Discuss from "../components/discuss"
import Child from "@/components/child"

export default function Home() {
  return (
   <div className="bg-[#928490] h-screen">
    <Discuss/>
    {/* <Talk/> */}
    
    <Child/>  
   </div>
  )
}
