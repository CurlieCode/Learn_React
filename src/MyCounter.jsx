import React, {useState} from 'react';
function MyComponent(){

    const [count,setCount] = useState(0);
    const increment = () =>{
        setCount(count + 2);
    }
    const decrement = () =>{
        setCount(count - 2);
    }
    const reset = () =>{
        setCount(0);
    }

    return (
        <div className = "count-container">
            <p className ="display">
                    {count}
            </p>
            <button className="button" onClick={decrement}> Decrement</button>
            <button className="button" onClick={reset}> Reset</button>
            <button className="button" onClick={increment}> Increment</button>
        </div>
    )


}
export default MyComponent