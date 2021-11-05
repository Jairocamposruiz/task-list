import { Todo } from "../App";
import TodoItem from "./TodoItem";

type TodoListProps = {
  items: Todo[],
};

export default function TodoList(props: TodoListProps) {
  return (
    <section>
      <ul>
        {props.items.map(item => (
          <TodoItem key={item.text} text={item.text} completed={item.completed} />
        ))}
      </ul>  
    </section>
  );
}
