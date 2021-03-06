import { useTodoContext } from "../hooks/useTodoContext";

export default function CreateTodoButton() {
  const {addTodo} = useTodoContext();

  return (
    <button onClick={addTodo} className="button">Create Task</button>
  );
}
