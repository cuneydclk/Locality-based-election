import './App.css';
import LoginPage from "./Components/Pages/LoginForm"
import { useState } from 'react';
import MainPage from './Components/Pages/MainPage';

const admin=["deneme","456"]

function App() {
  const [isAdmin,setIsAdmin]=useState(false);

  const adminLoginHandler =(username,password)=>
  { 
    if(username===admin[0]&& password===admin[1])
    {
      console.log("you can enter the admin page")
      setIsAdmin(true);
    }
  }

  return (
    <div className="App">
      <MainPage />
    
    </div>
  );
}

export default App;
