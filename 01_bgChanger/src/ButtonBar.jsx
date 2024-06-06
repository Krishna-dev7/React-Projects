import { v4 as uuid } from "uuid";

function ButtonBar({ changeColor = () => null }) {
  return <>
    {
      ["green", "yellow", "yellowgreen", "orange", "blue", "olive", "white", "black"].map((el) => {
        return <button key={uuid()} onClick={(e) => {
          changeColor(e.target.innerText.trim());
        }}
          className="px-4 py-1 rounded-full outline-none"
          style={{ backgroundColor: el }}
        > {el} </button>
      })
    }
  </>
}

export default ButtonBar;