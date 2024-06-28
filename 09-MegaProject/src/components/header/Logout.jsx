import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";

function Logout() {
  const dispatch = useDispatch();

  return <button
    className="px-3 py-2 rounded-lg bg-red-500 border-none hover:border-2 border-black text-black"
    onClick={ () => dispatch(logout()) }>
    Logout
  </button>
}

export default Logout;