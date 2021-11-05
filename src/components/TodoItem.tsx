import { Todo } from "../App";

export default function TodoItem(props: Todo) {
  return (
    <li className={props.completed ?"completed" :""} >
      <div className={`checkbox`}>{props.completed ?"✔" :""}</div>
      <p>{props.text}</p>
      <button className="delete">X</button>
    </li>
  );
}
