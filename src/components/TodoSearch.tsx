import { ChangeEvent } from "react";
import { useTodoContext } from "../hooks/useTodoContext";

export default function TodoSearch() {
  
  const { 
    searchValue, 
    setSearchValue, 
    toogleFilterComplete, 
    filterComplete 
  } = useTodoContext()

  const onSearchValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  return (
    <div>
      <input
      value={searchValue} 
      onChange={onSearchValueChange} 
      className="inputSearch" 
      placeholder={"Search task"} />
      <button onClick={toogleFilterComplete} className="buttonSearch">{filterComplete ? "🙈" : "🙉"}</button>
    </div>
  );
}