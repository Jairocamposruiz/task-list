import { ChangeEvent } from "react";
import { useTodoContext } from "../hooks/useTodoContext";

export default function CreateTodoInput() {

  const { createTodoValue, setTodoValue } = useTodoContext();

  const onInputValueChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTodoValue(event.target.value)
  }

  return (
    <div className="CreateTodoInput">
      <label>New Task</label>
      <textarea onChange={onInputValueChange} value={createTodoValue} placeholder="Name of the new task" />
    </div>
  );
}
