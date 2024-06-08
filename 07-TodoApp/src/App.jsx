import { useState, useEffect } from 'react'
import { TodoProvider } from './contexts/Todo';
import Item from './components/Item';
import './App.css'
import Todo from './components/Todo';

function App() {

  // useEffect(() => {
  //   setTasks(todos);
  // }, [])
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: Date.now(), todoMsg: task, isDone: false }];
    })
  }

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => {
        return todo.id != id;
      })
    })
  }

  const updateTodo = (id, newTask) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, todoMsg: newTask };
        }
        return { ...todo };
      })
    })
  }

  const toggleDone = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      })
    })
  }

  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleDone }} >
      <div className=' p-2 flex flex-row justify-around items-center h-full w-full gap-2 ' >
        <div
          className="left-section w-1/4 h-full text-center shadow-xl rounded-xl bg-pink-300 bg-center bg-cover ">

        </div>
        <div className="right-section flex-grow flex flex-col gap-4 w-1/2 h-full rounded-xl shadow-xl p-5 text-white leading-4 bg-violet-500 ">
          <h1 className='text-3xl my-3' > Todos. </h1>
          <div className="todo mt-5 ">
            <Todo />
          </div>
          <div className="tasks">
            {todos.map((todo) => (<Item todo={todo} />))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
