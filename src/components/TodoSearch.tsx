type TodoSearchProps = {};

export default function TodoSearch(props: TodoSearchProps) {
  return (
    <div>
      <input className="inputSearch" placeholder={"Search task"} />
      <button className="buttonSearch">🔍</button>
    </div>
  );
}