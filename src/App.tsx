import "./styles/App.css";
import taskImage from "./image-2.svg";

import CreateTodoButton from "./components/CreateTodoButton";
import TodoCounter from "./components/TodoCounter";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";
import CreateTodoInput from "./components/CreateTodoInput";

export type Todo = { text: string, completed: boolean }

const todos: Todo[] = [
  { text: "Hacer X cosa", completed: false },
  { text: "Hacer Y cosa adf adf adfd ad fa dfa df adds f ads fa df adsf asdf a fadsfadsfadfadfads  afadf", completed: true },
  { text: "Hacer Y cosa1", completed: true },
  { text: "Hacer Y cosa2", completed: false },
  { text: "Hacer Y cosa3", completed: true },
  { text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam minus officia, enim officiis reiciendis natus alias nostrum ullam accusantium labore. Porro, repellendus. Obcaecati, similique? Aut praesentium dolores tempora accusamus earum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam minus officia, enim officiis reiciendis natus alias nostrum ullam accusantium labore. Porro, repellendus. Obcaecati, similique? Aut praesentium dolores tempora accusamus earum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam minus officia, enim officiis reiciendis natus alias nostrum ullam accusantium labore. Porro, repellendus. Obcaecati, similique? Aut praesentium dolores tempora accusamus earum?", completed: true },
  { text: "Hacer Y cosa4", completed: false },
  { text: "Hacer Y cosa5", completed: true },
]

function App() {
  return (
    <div className="App">
      <div className="CreateTasksContainer">
        <h2 className="subtitle">Create New Task</h2>
        <CreateTodoInput />
        <CreateTodoButton />
        <img alt="blog note" src={taskImage}/>
      </div>
      <div className="TasksContainer" >
        <h1 className="title">Your Tasks</h1>
        <TodoCounter />
        <TodoSearch />
        <TodoList items={todos}/>
      </div>
    </div>
  );
}

export default App;
