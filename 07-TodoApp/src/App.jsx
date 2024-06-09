import { useState, useEffect } from 'react'
import { TodoProvider } from './contexts/Todo';
import pand2 from "./assets/panda2.png";
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

  useEffect(() => {
    const allTodos = JSON.parse(localStorage.getItem("todos"));
    if (allTodos) {
      setTodos(allTodos);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleDone }} >
      <div className=' p-2 todo-div flex relative flex-row justify-around items-center h-full w-full gap-3 ' >
        <div className="cute absolute w-40 h-40 rounded-full bg-green-500 -top-16 mt-5 ml-5 left-60 ">
          <img className=' text-white bg-white rounded-full w-full h-full bg-center bg-cover object-center object-cover ' src={"https://i.pinimg.com/564x/ee/5f/5e/ee5f5ef3f01c6568136ba847713f86ea.jpg"} alt="no image" />
        </div>
        <div
          className="left-section w-1/3 h-full text-center shadow-xl rounded-xl bg-pink-300 bg-center bg-cover ">

        </div>
        <div className="right-section overflow-auto flex-grow flex flex-col items-center gap-4 w-full h-full rounded-xl shadow-xl p-5 text-white leading-4 bg-violet-500 ">
          <h1 className='text-3xl my-3' > Todos. </h1>
          <div className="todo mt-5 w-full ">
            <Todo />
          </div>
          <div className="tasks w-6/12">
            {todos.map((todo) => (<Item todo={todo} />))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
