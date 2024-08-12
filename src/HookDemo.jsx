import React, {useState} from 'react';

function HookDemo(){
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isBoolValue, setIsBoolValue] = useState(false);
    const updateName =() =>{
       
        setName("curlie");
    }

    const incrementAge = () => {
        setAge(age + 1)
    }

    const updateBoolValue = () => {
        setIsBoolValue(!isBoolValue)
    }

    return (
        <div>
            <p> Here name: {name}
            </p>
            <button onClick = {updateName}>Click Me</button>

            <p> Here Age: {age}
            </p>
            <button onClick = {incrementAge}>Age</button>
            <p> Here BoolValue: { isBoolValue ? "yes" : "No"}
            </p>
            <button onClick = {updateBoolValue}>Boolean</button>
        </div>
    )


}

export default HookDemo