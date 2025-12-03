import { useAppDispatch } from "../../hooks";
import { deleteTodoAsync, editTodoAsync, toggleTodoAsync } from "../../thunks";
import { useCallback, useState } from "react";

interface TodoItemProps {
  id: number;
  title: string;
  complete: boolean;
}

export const TodoItem: React.FC<TodoItemProps> = ({ id, title, complete }) => {
  const [showEditInput, setShowEditInput] = useState<boolean>(false);
  const [editValue, setEditValue] = useState<string>("");

  const dispatch = useAppDispatch();

  const editHandler = useCallback(
    (e) => {
      setEditValue(e.target.value);
    },
    [editValue, setEditValue],
  );

  const submitEditHandler = useCallback(() => {
    dispatch(editTodoAsync({ id, title: editValue }));
    setShowEditInput(false);
    setEditValue("");
  }, [editValue, id, dispatch]);

  return (
    <div>
      {!showEditInput && (
        <input
          type="checkbox"
          checked={complete}
          onChange={() =>
            dispatch(toggleTodoAsync({ id, complete: !complete }))
          }
        />
      )}
      {showEditInput ? (
        <input
          placeholder="edit todo"
          value={editValue}
          onChange={(event) => editHandler(event)}
        />
      ) : (
        <span>{title}</span>
      )}
      <button onClick={() => dispatch(deleteTodoAsync(id))}>x</button>
      {showEditInput && editValue.trim().length > 0 && (
        <button onClick={() => submitEditHandler()}>submit</button>
      )}
      {!showEditInput && (
        <button onClick={() => setShowEditInput(true)}>edit</button>
      )}
    </div>
  );
};
