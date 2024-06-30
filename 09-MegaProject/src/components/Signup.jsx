import authService from "../appwrite/auth";
import { login } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Input, Button } from "./index";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Signup() {
  // logic part
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("")

  // creating onSubmit handler

  const signup = async (data) => {
    setError("");
    try {
      const session = await authService.createAccount(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        userData ?? dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    // TODO : modify the classes  
    <div className="" >
      <h1> Sign up </h1>

      { error ?? <p className="text-red-500 font-bold" > {error} </p> }

      <form onSubmit={handleSubmit(signup)}>
        <Input
        type = "text"
        name = "name"
        label = "Name: "
        placeholder = "Enter full name"  
        { ...register("name", {
          required: true
        }) } 
        />

        <Input
        type = "email"
        name = "email"
        label = "Email: "
        placeholder = "Enter Email"
        { ...register("email", {
          required: true,
          validate: {
            matchPattern: value =>  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                " Email address must be a valid address " ,
          }
        }) } />

        <Input 
        type = "password"
        name = "password"
        label = "Password: "
        placeholder = "Enter password"
        { ...register("password", {
          required: true,
        }) } />
        
        <Button
         type = "submit" > 
          signup
        </Button>
      </form>
    </div>
  )

}

export default Signup