import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../hooks";
import { addTodoAsync, getTodoAsync } from "../../../thunks";
import { NewTodoForm } from "../../NewTodoForm";
import { TodoList } from "../../TodoList";

export const TodoPage = () => {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTodoAsync());
  }, [dispatch]);

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addTodoAsync(text));
      setText("");
    }
  };

  return (
    <div className="App">
      <NewTodoForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />
      <TodoList />
    </div>
  );
};
