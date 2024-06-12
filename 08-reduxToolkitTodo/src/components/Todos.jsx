import { useSelector } from "react-redux";
import Todo from "./Todo";

function Todos() {

  const todos = useSelector(state => state.todo.todos);
  return (
    <div className="todos mt-10 px-2 py-2 flex flex-col items-center justify-around w-1/3 ">
      {

        todos.map(todo => <Todo key={todo.id} todo={todo} />)
      }
    </div>
  )
}

export default Todos;