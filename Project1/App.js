import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Home from './component/Home/Home';
import MainHeader from './component/MainHeader/MainHeader';
import Login from './component/Login/Login';

function App() {
  const [isLoggedIn,setLoggedIn]=useState(false);
  const storedInfo=localStorage.getItem("isLoggedIn");
  useEffect(()=>{
    if(storedInfo==="1"){
      setLoggedIn(true);
    }

  },[])
  
  const logginHandeler=(email,password)=>{
    setLoggedIn(true);
  };
  const LogoutHandler=()=>{
    setLoggedIn(false);
    localStorage.setItem("isLoggedIn",0);
  }



  return (
    <>
    <MainHeader isAuthenticated={isLoggedIn} onLogout={LogoutHandler}/>
    <main>
      {!isLoggedIn && <Login onLogin={logginHandeler}/>}
      {isLoggedIn && <Home onLogout={LogoutHandler}/>}
    </main>
    </>
  );
}

export default App;
