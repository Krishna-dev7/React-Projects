import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react"; 
import { login as authLogin } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { Input, Button } from "./index";

function Login() {
  const {register, handleSubmit} = useForm();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        userData ?? dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    // TODO : modify the classes
    <div className="" >
      <div className="" >
        <p> If account doesn't exist </p>
        <Link
        className=""
        to={"/signup"} > 
          signup
        </Link>
      </div>  

      { error && <p> {error.message} </p> }

      <form
       onSubmit={handleSubmit(login)}>
        <div className="form-group">
          <Input
            type= "email"
            label= "Email: " 
            name= "email"
            placeholder= "Enter your email"
            { ...register("email", {
              required: true,
              validate: {
                matchPattern: value =>  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                " Email address must be a valid address "
              }
            }) }
           />

          <Input 
            type = "password"
            label = "Password: "
            placeholder = "Enter your password"
            { ...register("password", {
              required: true
            }) }
          />
           

          <Button
            type = "submit">
              sign in
          </Button> 
        </div>
       </form>
    </div>
  )
}

export default Login;