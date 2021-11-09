import "../styles/App.css";
import taskImage from "../static/image.svg";

import CreateTodoButton from "../components/CreateTodoButton";
import TodoCounter from "../components/TodoCounter";
import TodoList from "../components/TodoList";
import TodoSearch from "../components/TodoSearch";
import CreateTodoInput from "../components/CreateTodoInput";

import Modal from "../Modal";
import { useTodoContext } from "../hooks/useTodoContext";

function AppUI() {

  const { openModal, setOpenModal, deleteTodos, todoForDelete } = useTodoContext();
 
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

        {openModal && (
          <Modal>
            <h1>Are you sore to delete the task?</h1>
            <p>{todoForDelete}</p>
            <div className="inLineButtons">
              <button className="button" onClick={() => deleteTodos()}>Yes</button>
              <button className="button" onClick={() => setOpenModal(!openModal)}>No</button>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default AppUI;
