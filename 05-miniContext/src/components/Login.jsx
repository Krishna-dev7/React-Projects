import { useContext, useState } from "react"
import UserContext from "../context/UserContext"

function Login() {

  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          name="username" id="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <br />

        <input
          type="text"
          name="password" id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />


        <button type="submit"> Login </button>
      </form>
    </div>
  )
}

export default Login;