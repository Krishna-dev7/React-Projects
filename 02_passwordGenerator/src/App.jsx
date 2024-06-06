import { useCallback, useEffect, useRef, useState } from "react";

function App() {

  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");


  // using callback
  const generatePassword = useCallback(() => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str = str.concat("0123456789");
    if (charAllowed) str = str.concat("@#$%&");
    const charArr = str.split("");
    console.log(charArr);

    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * charArr.length + 1);
      pass += charArr[randomIndex];
    }

    setPassword(pass);

  }, [length, numAllowed, charAllowed]);


  // using useEffect
  useEffect(() => {
    generatePassword();
  }, [length, numAllowed, charAllowed, generatePassword])


  // using useRef
  const inputRef = useRef(null)
  function copyPassword() {
    window.navigator.clipboard.writeText(inputRef.current.value);
    inputRef.current?.select();
    inputRef.current?.selectRange(8, 10);
  }

  return (
    <div className="container h-full">
      <h1 className="text-4xl mt-20 text-white text-center" > Password Generator </h1>
      <div className=" w-6/12 mx-auto  flex flex-col justify-between items-center">

        <div className="top-section mt-5 w-full flex justify-center items-center gap-5">

          <input
            value={password} readOnly
            ref={inputRef}
            type="text" name="pass" id="pass"
            className="py-1 w-8/12  bg-gray-600/60 text-white indent-3 rounded-sm outline outline-1 outline-green-600 focus:outline-white focus:outline-1 border-none" />

          <button
            onClick={copyPassword}
            className=" bg-blue-600  rounded-sm px-5 py-1 text-center outline-none border-none  cursor-pointer active:bg-blue-500 ease-in-out duration-300 text-white" >
            copy
          </button>

        </div>

        <div className="bottom-section w-full text-white flex flex-wrap justify-evenly items-center gap-5 mt-10">
          <div>
            <input
              type="range"
              name="range" id="range" value={length} min={8} max={30}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="range"> Length {length} </label>
          </div>

          <div>
            <input
              value={charAllowed}
              type="checkbox" name="charAllowed" id="charAllowed"
              onChange={(e) => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charAllowed"> Character </label>
          </div>

          <div>
            <input
              value={numAllowed}
              type="checkbox" name="numAllowed" id="numAllowed"
              onChange={(e) => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numAllowed"> Number </label>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
