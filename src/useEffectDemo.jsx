import React, {useState, useEffect} from "react"

function UseEffectDemo(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("blue")

    function addCount(){
        setCount(c => c+1)
    }

    function subtractCount(){
        setCount( c => c-1)
    }

    function changeColor(){
        setColor( c => c === "blue" ? "red" : "black")
    }

 //useEffect(function, [dependencies])

 useEffect(() => {
    document.title = `count : ${count} ${color}`;

 },[color,count])


    return(
    <>
    <p style = {{color : color }}> count : {count} </p>
    <button onClick = {addCount} > Add</button> 
    <button onClick = {subtractCount} > Subtract</button>   <br/>
    <button onClick = {changeColor} > Change color</button> 
    
    </>)

}
export default UseEffectDemo