import { useState } from 'react'
import './App.css'
import LoginPage  from '../src/LoginPage';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import LogoutPage from '../src/LogoutPage';


function App() {
const user = useSelector(selectUser);


  return (
    <div className="App" >
     <div>{user ? <LogoutPage/>:<LoginPage/>}</div>
    </div>
  )
}

export default App
