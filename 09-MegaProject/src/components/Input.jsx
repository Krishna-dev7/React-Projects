import { forwardRef, useId} from "react";

const Input = forwardRef( function Input({
  type = "text",
  label,
  className = '',
  ...props
}, ref) {

  const id = useId();
  return <div className="mt-5" >
    {label} && <label htmlFor={id}>
      {label}
    </label>

    <input 
      type={type}
      className= { `${className}` }
      id= {id}
      {...props}
      ref={ref}
      />
  </div>
} )

export default Input;