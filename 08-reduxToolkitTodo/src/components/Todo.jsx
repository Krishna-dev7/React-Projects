import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlicer";

function Todo({ todo }) {

  const dispatch = useDispatch()

  return (
    <div className="Todo">
      {
        todo.text ? todo.text : "cannot display text"
      }

      <button onClick={() => dispatch(removeTodo(todo.id))} >
        remove
      </button>
    </div>
  )
}

export default Todo;