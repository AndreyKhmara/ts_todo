interface NewTodoProps {
  value: string;
  handleAction: () => void;
  updateText: (str: string) => void;
}

export const NewTodoForm: React.FC<NewTodoProps> = ({
  value,
  updateText,
  handleAction,
}) => {
  return (
    <label>
      <input
        placeholder="new todo"
        value={value}
        onChange={(e) => updateText(e.target.value)}
      />
      <button onClick={handleAction}>add</button>
    </label>
  );
};
