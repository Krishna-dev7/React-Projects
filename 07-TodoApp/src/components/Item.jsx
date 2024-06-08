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
      className="item px-5 py-3 w-1/2 rounded-lg bg-white text-black flex flex-row justify-evenly items-center">

      <span onClick={() => { toggleDone(todo.id) }} >
        {todo.isDone ?
          <i class="ri-checkbox-fill"></i> :
          <i class="ri-checkbox-blank-line"></i>}
      </span>

      <input
        className="hover:outline-none px-3 py-1 focus:outline-none"
        type="text" name="todo" id="todo"
        readOnly={!toEdit}
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      {toEdit ?
        <span onClick={() => {
          updateTodo(todo.id, newTask);
          setToEdit(false);
        }} >
          <i class="ri-edit-box-fill"></i>
        </span> :
        <span className="  " onClick={() => (setToEdit(true))} >
          <i class="ri-edit-box-line"></i>
        </span>}

    </div>
  )
}

export default Item;