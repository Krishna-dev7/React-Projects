import useTodo from "../contexts/Todo";
import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("krishna");
  const { addTodo } = useTodo();

  return (

    <div className="task-input text-lg" >
      <form onSubmit={(e) => {
        e.preventDefault();
        addTodo(task);
        setTask("");
      }}
        className='gap-5 flex justify-center' >
        <input
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          className=' focus:outline-none focus:outline- rounded-md py-1.5 w-1/3 text-sm  indent-4 text-black '
          type="text" name="task" id="task"
        />

        <button type="submit" className='rounded-md px-3 py-2 hover:bg-white border-black border-2 text-white hover:text-black hover:border-white bg-violet-500 text-sm ' >
          Add Task
        </button>
      </form>
    </div>

  )
}

export default Todo;