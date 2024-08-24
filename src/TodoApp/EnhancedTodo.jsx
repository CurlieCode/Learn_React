import React, {useState} from "react"
import './todo.css'
function EnhancedTodo(){
    const [todos, setTodos] = useState([]);
    const [inputText,setInputText] = useState('');
    const[editId, setEditId] = useState(null);
    const [editText, setEditText] = useState('');

    const AddTodo =() =>{
        if(inputText.trim())
        {
            const newTodo ={
                id:Date.now(),
                text:inputText,
                completed:false
            };
            setTodos([...todos,newTodo])
            setInputText('');
        }
    }

    const editTodo =(id,text) => {
        setEditId(id);
        setEditText(text);
    }

    const saveEdit =(id) => {
        const updatedTodo = todos.map((todo) => todo.id === id ? {...todo,text:editText} : todo )
        setTodos(updatedTodo);
        setEditId(null);
        setEditText('');
    }

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos)
    }
    return(
        <div>
            <h1>Todo List</h1>
            <input 
            type="text"
            value={inputText}
            onChange= {(e) => setInputText(e.target.value)}
            placeholder="Add your todo"
            />
            <button onClick={AddTodo}>Add Todo</button>
          
            <ul>
                {todos.map((todo) => (
                    <li key = {todo.id}>
                        {editId === todo.id ? (
                            <>
                            <input 
                            type="text"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            />
                            <button onClick={() => saveEdit(todo.id)}>Save</button>
                            </>
                        ):(
                            <>
                            <input
                            type="checkbox"
                            checked ={todo.completed}
                            onChange={
                                () => setTodos(todos.map((t) => t.id === todo.id ? {...t,completed:!t.completed} : t))
                            }
                            />
                            <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
                            <button onClick={() => editTodo(todo.id, todo.text)}>Edit</button>
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            </>  
                        )}
                    </li>
                ) )}
            </ul>

        </div>
    )

}
export default EnhancedTodo