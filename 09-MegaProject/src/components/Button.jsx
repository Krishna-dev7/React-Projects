function Button({
  children,
  className = '',
  onClick = () => {},
  ...props
}) {
  return (
    <button 
      {...props}
      onClick={onclick}
      className="px-3 py-2 rounded-lg bg-red-500 border-none hover:border-2 border-black text-black" >
      { children }
    </button>
  )  
}

export default Button;