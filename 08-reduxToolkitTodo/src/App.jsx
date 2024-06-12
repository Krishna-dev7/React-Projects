import AddTodo from './components/AddTodo';
import './App.css'
import Todos from './components/Todos';

function App() {

  return (
    <div className='w-full flex flex-col items-center' >
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App