import React, {useState} from "react"

function ToDoApp(){
    const [input, setInput] = useState('');
    const [todos, setTodo] = useState([]);
    function handleInput(event){
        setInput(event.target.value)
    }
    function addTodo(){
        if(input != ""){
            setTodo([...todos,input])
            setInput('');
        }   
    }
    return(
        <div className="todo-container">
            <h1 className="todo-heading">ToDo App</h1>
            <input className="todo-input"
            type="text"
            value={input}
            onChange={handleInput}
            placeholder="Enter the Task"
            />
            <br/>
            <button className="todo-button" onClick={addTodo}>Add Todo</button>
            <ul className="todo-ul">
                {todos.map((todo,index) => (
                    <li className="todo-list" key = {index}>{todo}</li>
                ))}
               
            </ul>
        </div>
    )

}
export default ToDoApp