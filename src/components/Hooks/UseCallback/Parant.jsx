import { React,useCallback, useState } from "react"
import Child from './Child'

const Parant = () => {
    const [add, setAdd] = useState(0)

    console.log(add);
    const newFunc = useCallback(() => {

    }, [])
    return (
        <div>
            <div>Parant</div>
            <h2>{add}</h2>
            <button onClick={() => setAdd(add + 1)}>Add</button>
            <Child newFunc={newFunc} />
        </div>
    )
}

export default Parant