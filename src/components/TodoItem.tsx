import { Todo } from "../types";

type TodoItemProps = {
  item: Todo,
  onComplete: (text: string) => void
  onDelete: (text: string) => void
}

export default function TodoItem({item, onComplete, onDelete}: TodoItemProps) {

  return (
    <li className={item.completed ?"completed" :""} >
      <button onClick={() => onComplete(item.text)} className={`checkbox`}>{item.completed ?"✔" :""}</button>
      <p>{item.text}</p>
      <button onClick={() => onDelete(item.text)} className="delete">X</button>
    </li>
  );
}
