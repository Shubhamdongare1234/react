import logo from './logo.svg';
import './App.css';
import Signup from './Component/Signup/Signup';
import Login from './Component/Login/Login';
import MainHeader from './Component/MainHeader/MainHeader';
import { useState } from 'react';


//const sign=("http://localhost:3000/data/create")
function App() {
  const [ShowSignup,setShowSignup]=useState(null);
  console.log(ShowSignup);
  // const [ShowLogin,setShowLogin]=useState(null);
  const signupUI=()=>{
    // setShowLogin(false);
    setShowSignup(true);
    console.log(ShowSignup);
  }
  const showloginUI=()=>{
    setShowSignup(false);
    console.log(ShowSignup);
  }
  async function AddStudentHandler(student){
     console.log(student);
    const productRespone=await fetch("http://localhost:3000/data/create",{
       method:"POST",
      body:JSON.stringify(student),
      headers:new Headers({
        "Content-type":"application/json",
      }),
    })
    const data=await productRespone.json();
    console.log(data);
    alert("New Prouct Added");
  }
  async function loginHandler(loginData){
    console.log(loginData);
    const Response=await fetch()
  }
  return (<>
  <MainHeader></MainHeader>
  {!ShowSignup && <Login signup={signupUI} CheckLoginData={loginHandler}></Login>}
   {ShowSignup && <Signup login={showloginUI} addStudent={AddStudentHandler}></Signup>}
   
   </>
  );
}

export default App;
