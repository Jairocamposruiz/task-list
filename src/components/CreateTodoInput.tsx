type CreateTodoInputProps = {};

export default function CreateTodoInput(props: CreateTodoInputProps) {
  return (
    <div className="CreateTodoInput">
      <label>New Task</label>
      <input type="text" placeholder="Name of the new task" />
    </div>
  );
}
