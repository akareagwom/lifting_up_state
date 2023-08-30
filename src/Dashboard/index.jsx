import { useState } from "react"

export const App =()=>{
    const [age,setAge] = useState(45)
    const handleClick=()=>{
        setAge(age+1);
    }
    return(
        <>
        <button className="bg-blue-400" onClick={handleClick}>{age}</button>
        </>
    )
}