import "../styles/App.css";
import taskImage from "../static/image.svg";

import CreateTodoButton from "../components/CreateTodoButton";
import TodoCounter from "../components/TodoCounter";
import TodoList from "../components/TodoList";
import TodoSearch from "../components/TodoSearch";
import CreateTodoInput from "../components/CreateTodoInput";

export type Todo = { text: string; completed: boolean };

function AppUI() {
 
  return (
    <div className="App">
      <div className="CreateTasksContainer">
        <h2 className="subtitle">Create New Task</h2>
        <CreateTodoInput />
        <CreateTodoButton />
        <img alt="blog note" src={taskImage} />
      </div>
      <div className="TasksContainer">
        <h1 className="title">Your Tasks</h1>
        <TodoCounter />
        <TodoSearch />
        <TodoList />
      </div>
    </div>
  );
}

export default AppUI;
