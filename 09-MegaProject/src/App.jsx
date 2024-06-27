import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { login, logout } from "./store/authSlice";
import authService from "./appwrite/auth";
import './App.css'

function App() {

  const [loading, setLoading] = useState(true);

  useEffect( async () => {
    const currUser = await authService.getCurrentUser();
    if (currUser) {
      useDispatch(login(currUser));
    } else {
      useDispatch(logout());
    }
    setLoading(false);
  }, [] )

  return !loading ? <div className='w-full h-full bg-green-400'>
    <div className='w-1/2 h-1/2 m-auto bg-white rounded'>
      Nothing has to display
    </div>
  </div>  :  null

}

export default App