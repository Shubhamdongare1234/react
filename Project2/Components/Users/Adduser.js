import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Adduser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../helper/wrapper";
const AddUser=(props)=>{
    const [enterusername,setusername]=useState("");
    const [enteruseage,setuserage]=useState("");
    const [error,setEror]=useState();


    const userNameChangeHandler=(event)=>{
        setusername(event.target.value);
    };
    const userAgeChangeHandler=(event)=>{
        setuserage(event.target.value);
    };


    const addUserHandler = (event)=>{
        event.preventDefault();
        if(enterusername.trim().length===0 || enteruseage.trim().length===0){
            setEror(
                {
                    title:"Invalid Input",
                    message:"Name and Age is Compulsory"
                }
            )
            return;
        }if(enteruseage<1){
            setEror(
                {
                    title:"invalid age",
                    message:"Enter valid age"
                }
            )
            return;
        }
       // console.log(enterusername,enteruseage);
       props.onAddUser(enterusername,enteruseage);

    };
    const errorHandler=()=>{
        setEror();
    }
    return(
        <Wrapper>
            {error && (<ErrorModal
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}></ErrorModal>)}
            
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">UserName</label>
                <input id="username" type="text" onChange={userNameChangeHandler} value={enterusername}/>
                <label htmlFor="age">Age (years)</label>
                <input id="age" type="number" onChange={userAgeChangeHandler} value={enteruseage}/>
                <Button type="submit">Add User</Button>
            </form>

        </Card>
        </Wrapper>
    );
};
export default AddUser;