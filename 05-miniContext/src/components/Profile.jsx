import { useContext } from "react"
import UserContext from "../context/UserContext"

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div> please login in </div>
  return <div className="user">
    Welcome {user.username}
  </div>
}

export default Profile;