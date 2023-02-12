import { useAppDispatch } from '../../hooks';
import { removeTodo, toggleComplete } from '../../store/todoSlice';


interface TodoItemProps{
  id: string;
  title: string;
  complete: boolean
}


const TodoItem: React.FC<TodoItemProps> = ({id, title, complete}) => {
  const dispatch = useAppDispatch()
   
  return (
    <div>
        <input type="checkbox" checked={complete} onChange={()=>dispatch(toggleComplete(id))}/>
        <span>{title}</span>
        <button onClick={()=>dispatch(removeTodo(id))}>x</button>    
    </div>
  )
}

export {TodoItem}