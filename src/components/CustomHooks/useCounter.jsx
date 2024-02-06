import { useState } from 'react'

function useCounter(initialVal = 0) {
    // const data=prop
    const [count, setCount] = useState(initialVal);


    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    return ([count, increment, decrement])
}

export default useCounter