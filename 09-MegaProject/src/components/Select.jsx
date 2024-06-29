import { forwardRef, useId } from "react";

function Select({
  options,
  label,
  name = '',
  className = '',
  ...props
}, ref) {

  // logic part
  const id = useId();

  return (
    <div 
      className={`px-3 py-1 outline-none border-2 rounded-lg text-black text-center border-black ${className}`} >
        { label && <label htmlFor= {id} >
            {label}
        </label> }

        <select
        name= {name} 
        id={id} 
        ref={ref}
        {...props} >
          {
            options?.map( option => <option key={option} value={option}  >
              {option}
            </option> )
          }
        </select>
    </div>
  );
}

export default forwardRef(Select);