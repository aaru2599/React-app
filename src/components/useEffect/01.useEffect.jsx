import { useEffect, useState } from "react"

const UseEffect01 = () => {
    const [count, setCount] = useState(0);
    const [uname, setUname] = useState("")
    useEffect(() => {

        setCount((count) => count + 1);

    }, []);
    const handleValChange = (e) => {
        useEffect(() => {
        
        },[uname])
    }

    console.log(count);
    return (
        <div>
            <input type="text" value={uname} onChange={handleValChange} />
        </div>
    )
}
export default UseEffect01