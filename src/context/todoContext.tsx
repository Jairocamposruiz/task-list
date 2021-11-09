import { createContext, ReactNode, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export type TodoContextInterface = {
  createTodoValue: string;
  setTodoValue: React.Dispatch<React.SetStateAction<string>>;
  addTodo: () => void;
  completedTodos: number;
  totalTodos: number;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  toogleFilterComplete: () => void;
  filterComplete: boolean;
  todosFiltered: Todo[];
  completeTodos: (text: string) => void;
  deleteTodos: (text: string) => void;
}

const TodoContext = createContext<TodoContextInterface | null>(null);

type TodoProviderProps = {
  children: ReactNode
}

export type Todo = { text: string; completed: boolean };

function TodoProvider(props: TodoProviderProps) {

  const [todos, saveTodos] = useLocalStorage<Todo[]>("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");
  const [filterComplete, setFilterComplete] = useState(false);
  const [createTodoValue, setTodoValue] = useState("");

  const completedTodos = todos.filter((todo) => todo.completed === true).length;
  const totalTodos = todos.length;

  const toogleFilterComplete = () => {
    setFilterComplete(!filterComplete);
  };

  const filter = () => {
    if (filterComplete) {
      const todosFilter = todos.filter((todo) => todo.completed === false);
      return todosFilter.filter((todo) =>
        todo.text.toLowerCase().includes(searchValue.toLowerCase())
      );
    } else {
      return todos.filter((todo) =>
        todo.text.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
  };

  const todosFiltered = filter();

  const completeTodos = (text: string) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    const toogleComplete = !newTodos[todoIndex].completed;
    newTodos[todoIndex] = {
      ...todos[todoIndex],
      completed: toogleComplete,
    };
    saveTodos(newTodos);
  };

  const deleteTodos = (text: string) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const addTodo = () => {
    if (createTodoValue.length <= 0) {
      return;
    }
    const newTodos = [...todos];
    const newTodo: Todo = {
      text: createTodoValue,
      completed: false,
    };
    newTodos.push(newTodo);

    saveTodos(newTodos);
    setTodoValue("");
  };



  const context: TodoContextInterface = {
    createTodoValue,
    setTodoValue,
    addTodo,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    toogleFilterComplete,
    filterComplete,
    todosFiltered,
    completeTodos,
    deleteTodos,
  }


  
  return (
    <TodoContext.Provider value={context}>
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };