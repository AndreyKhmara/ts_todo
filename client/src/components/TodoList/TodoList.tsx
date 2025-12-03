import { useAppSelector } from "../../hooks";
import { TodoItem } from "../TodoItem/TodoItem";

const TodoList: React.FC = () => {
  const todos = useAppSelector((state) => state.todo.list);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export { TodoList };
