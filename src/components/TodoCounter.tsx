import { useTodoContext } from "../hooks/useTodoContext";

export default function TodoCounter() {
  const { completedTodos, totalTodos } = useTodoContext();

  return (
    <h2 className="subtitle">Completed {completedTodos} to {totalTodos} tasks</h2>
  );
}
