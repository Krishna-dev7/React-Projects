import { useState } from 'react'
import ButtonBar from './ButtonBar';

function App() {
  const [color, setColor] = useState("olive");

  function changeColor(color) {
    setColor(color);
  }

  return (
    <div className="bgchanger flex items-center flex-col justify-end w-full h-screen"
      style={{ backgroundColor: color }}
    >
      <div className="buttonbar px-3 py-3 fixed flex flex-wrap justify-center bottom-10 rounded-3xl bg-white gap-3 w-8/12 ">
        <ButtonBar changeColor={changeColor} />
      </div>
    </div>
  )
}

export default App
