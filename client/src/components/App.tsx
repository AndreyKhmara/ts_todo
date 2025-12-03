import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";

import NewTodoForm from "./NewTodoForm/NewTodoForm";
import { TodoList } from "./TodoList/TodoList";
import { addTodoAsync, getTodoAsync } from "../thunks";

function App() {
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
}

export default App;
