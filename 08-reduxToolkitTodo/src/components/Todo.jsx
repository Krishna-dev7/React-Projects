import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlicer";
import { changeText } from "../features/todo/inputSlicer";
import { useState } from "react";

function Todo({ todo }) {

  const dispatch = useDispatch()
  console.log(todo.id);

  const [text, setText] = useState(todo.text ?? "no todo");
  const [toEdit, setToEdit] = useState(false);


  return (
    <div className="Todo mt-3 w-full text-lg flex gap-5 justify-between bg-white text-black rounded-md px-10 py-3  items-center ">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        readOnly={!toEdit}
      />

      <div>
        {
          toEdit ?
            <button onClick={() => {
              dispatch(updateTodo({ id: todo.id, text }));
              setToEdit(false);
            }} >
              <span className="text-red-400 px-2 font-bold py-2 text-lg" > ✅ </span>
            </button>
            :
            <button onClick={() => {
              setToEdit(true)
            }} >
              <span className="text-red-400 px-2 font-bold py-2 text-lg" > 🖋️ </span>
            </button>
        }

        <button onClick={() => dispatch(removeTodo(todo.id))} >
          <span className="text-red-400 px-2 font-bold py-2 text-lg" > X </span>
        </button>
      </div>
    </div>
  )
}

export default Todo;