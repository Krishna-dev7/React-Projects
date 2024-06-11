import { useState } from "react";
import { addTodo } from "../features/todo/todoSlicer"
import { useDispatch } from "react-redux"

function AddTodo() {

  const dispatch = useDispatch();
  const [text, setText] = useState("");

  return (
    <div className="todo w-2/3" >
      <form onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTodo(text));
        setText("");
      }}  >

        <input
          className="text-black"
          onChange={(e) => setText(e.target.value)}
          value={text}
          type="text" name="text" id="text"
        />

        <button className=" bg-white border-none text-black px-3 py-2 rounded-full w-14 "  >
          add
        </button>

      </form>
    </div>
  )
}

export default AddTodo;