import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './Components/Users/Adduser';
import { useState } from 'react';
import UserList from './Components/Users/UserList';
import Wrapper from './Components/helper/wrapper';

function App() {
  const [Users,setUser]=useState([]);
  const addUserHandler=(uName,uAge)=>{
    setUser((preUser)=>{
      return [...preUser,{
        name:uName,age:uAge,id:Math.random().toString()
      }];
    })

  }
  
  return (
    
     
   <React.Fragment>
        <AddUser onAddUser={addUserHandler}></AddUser>
        <UserList users={Users}></UserList>
        </React.Fragment>

  
  )
  
}

export default App;
