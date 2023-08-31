import { useEffect, useState } from "react"
import { createConnection } from "./chat";

export const App =({roomId})=>{
    const [age,setAge] = useState(45);
    const [serverUrl, setServerUrl] = useState('https://localhost:1234');

    useEffect(()=>{
        const connection = createConnection(serverUrl,roomId)
        connection.connect();
        return () => {
          connection.disconnect();
        };
    },[serverUrl,roomId])

    const handleClick=()=>{
        setAge(age+1);
    }
    return(
        <>
         <label>
        Server URL:{' '}
        <input
          value={serverUrl}
          onChange={e => setServerUrl(e.target.value)}
        />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
        <button className="bg-blue-400" onClick={handleClick}>{age}</button>
        </>
    )
}