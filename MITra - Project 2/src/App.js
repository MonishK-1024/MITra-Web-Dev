import React, { useEffect } from 'react';
import './App.css';
import Login from './components/auth/Login'
import Quora from './components/Quora'
import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { updateCurrentUser } from 'firebase/auth';
import { auth } from './Firebase'

function App() {

  const user = useSelector(selectUser);
  
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          displayName: authUser.displayName,
          email: authUser.email
        }));
        console.log(authUser)
      } else {
        dispatch(logout())
      }
    })

  }, [dispatch]);
  return (

    <>
      < BrowserRouter >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Quora />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
