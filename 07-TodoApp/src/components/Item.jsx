import { useState, useEffect } from "react";
import useTodo from "../contexts/Todo"

function Item({ todo }) {

  const [toEdit, setToEdit] = useState(false);
  const [newTask, setNewTask] = useState("");
  const { updateTodo, deleteTodo, toggleDone } = useTodo();

  useEffect(() => {
    setNewTask(todo.todoMsg);
  }, [])

  return (
    <div
      key={todo.id}
      className={`item transition-all duration-150 w-full px-5 py-3 mt-5 rounded-lg text-black flex flex-row justify-evenly items-center ${todo.isDone ? "bg-green-200" : "bg-white"} `}>

      <span className="cursor-pointer w-1/12" onClick={() => { toggleDone(todo.id) }} >
        {todo.isDone ?
          <i className="ri-checkbox-fill  "></i> :
          <i className="ri-checkbox-blank-line"></i>}
      </span>

      <input
        className={`hover:outline-none bg-transparent ${todo.isDone ? "line-through" : ""}  px-3 py-1 focus:outline-none`}
        type="text" name="todo" id="todo"
        readOnly={!toEdit}
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      {toEdit && !todo.isDone ?
        <span className=" w-1/12 cursor-pointer " onClick={() => {
          updateTodo(todo.id, newTask);
          setToEdit(false);
        }} >
          <i className="ri-edit-box-fill"></i>
        </span> :
        <span className=" w-1/12 cursor-pointer " onClick={() => (setToEdit(true))} >
          <i className="ri-edit-box-line"></i>
        </span>}

      <span className="cursor-pointer font-bold text-2xl w-1/12" onClick={() => deleteTodo(todo.id)} >
        <i className="ri-close-fill"></i>
      </span>

    </div>
  )
}

export default Item;