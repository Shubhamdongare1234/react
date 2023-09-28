
import './App.css';
import Header from './Components/MainHeader/Header';
import Login from './Components/Login/Login';

import { useEffect, useState } from 'react';
import Home from './Components/Home/Home';


function App() {
  const [login,setlogin]=useState(false);
const log=localStorage.getItem("loginallow");  
useEffect(()=>{
  if(log==="1"){
    setlogin(true);
  }
},[])

  const LoginHandler=(email,password)=>{
setlogin(true);
}
const logoutHandler=()=>{

  setlogin(false);
  localStorage.setItem("loginallow",0);
}
  return (
    <>
    <Header isAuthentication={login} LogOut={logoutHandler}></Header>
    {/* <Header LogOut={logoutHandler}></Header> */}
    <main>
      {!login && (<Login onLoggIn={LoginHandler}></Login>)}
      {login && (<Home></Home>)}

      
    </main>
    </>
  );
}

export default App;
