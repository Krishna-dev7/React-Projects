import { addTodo } from "../features/todo/todoSlicer"
import { useDispatch, useSelector } from "react-redux"
import { changeText } from "../features/todo/inputSlicer";

function AddTodo() {

  const dispatch = useDispatch();
  const text = useSelector(state => state.input.text);

  return (
    <div className="todo w-1/3 px-2 flex " >
      <form
        className="flex w-full justify-around items-center gap-10"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addTodo(text));
          dispatch(changeText(""));
        }}  >

        <input
          className="text-black flex-grow px-3 py-2 rounded-md focus:outline-none "
          onChange={(e) => dispatch(changeText(e.target.value))}
          value={text}
          type="text" name="text" id="text"
        />

        <button className=" bg-white border-none text-black px-3 py-2 rounded-md w-24 "  >
          add
        </button>

      </form>
    </div>
  )
}

export default AddTodo;