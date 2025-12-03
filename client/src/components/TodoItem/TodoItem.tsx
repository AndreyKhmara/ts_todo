import { useAppDispatch } from "../../hooks";
import { deleteTodoAsync, toggleTodoAsync } from "../../thunks";

interface TodoItemProps {
  id: number;
  title: string;
  complete: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, complete }) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <input
        type="checkbox"
        checked={complete}
        onChange={() => dispatch(toggleTodoAsync({ id, complete: !complete }))}
      />
      <span>{title}</span>
      <button onClick={() => dispatch(deleteTodoAsync(id))}>x</button>
    </div>
  );
};

export { TodoItem };
