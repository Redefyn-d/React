import React, {useState} from 'react'

function Counter(){
    const [count , setCount] = useState(0);
    const add = () =>{
        setCount(count+1);
    }
    const sub = () =>{
        setCount(count-1);
    }
    const reset = () =>{
        setCount(0);
    }
    return (<>
            <p>{count}</p>
            <button id = "Inc"  onClick={add}>Increement</button>
            <button id = "Red"  onClick={sub}>Decreement</button>
            <button id = "Rest" onClick={reset}>Reset</button>
            </>)
}

export default Counter