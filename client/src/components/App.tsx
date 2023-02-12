import { useEffect, useState, useRef } from "react"
import { ITodo } from "../types/data"
import {TodoList} from "./TodoList/TodoList"


const App: React.FC = () =>{
    const [value, setValue] = useState('')
    const [todos, setTodos] = useState<ITodo[]>([])

    const inputRef = useRef<HTMLInputElement | null>(null)

    const handleChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }
    
    const handleKeyDown:React.KeyboardEventHandler<HTMLInputElement> = (e) =>{
        if(e.key === 'Enter'){
        addTodo()
        }
    }

    const addTodo = () =>{
        if (value){
            setTodos([...todos , {
                id: Date.now(),
                title: value,
                complete: false,
               }]) 
               setValue('')
        }      
    }

    const removeTodo = (id:number):void => {
        setTodos(todos.filter((el)=> el.id!== id))
    }

    const toggleTodo = (id:number):void =>{
        setTodos(todos.map((el)=> el.id !== id ? el : {...el, complete: !el.complete} ))
    }

    useEffect(()=>{
        if(inputRef.current) inputRef.current.focus()
    },[])
    return (
        <div>
            <div>
                <input type="text" value={value} onChange={handleChange} onKeyDown={handleKeyDown} ref={inputRef}/>
                <button onClick={addTodo}>add</button>
            </div>
            <TodoList items={todos}  removeTodo={removeTodo} toggleTodo={toggleTodo}/>
        </div>
    )
}
export {App}
