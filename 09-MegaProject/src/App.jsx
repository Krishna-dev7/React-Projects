import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { login, logout } from "./store/authSlice";
import authService from "./appwrite/auth";
import './App.css'
import { Logout, Navbar } from './components/index';

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect( () => {
    authService.getCurrentUser()
    .then( currUser => {
      if (currUser) {
        dispatch(login(currUser));
      } else {
        dispatch(logout());
      }
    })
    .finally(() => {
      setLoading(false);
    })
  }, [] )

  return !loading ? <div className='w-full h-full bg-green-400'>
    <div className='w-1/2 h-1/2 m-auto text-black bg-white rounded'>
      <div className="header flex justify-evenly items-center ">
        <Navbar />
        <Logout />
      </div>
      
    </div>
  </div>  :  null

}

export default App