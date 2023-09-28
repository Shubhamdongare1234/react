import { useEffect, useReducer, useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";

const EmailReducer=(state,action)=>{
    if(action.type==="Check_USer"){
        return{name:action.val,isValid:action.val.includes('@')};
    }
    if(action.type==="Valid_User"){
        return{name:state.name,isValid:state.name.includes('@')};
    }
    return{name:"",isValid:false};


}


const PasswordReducer=(state,action)=>{
    if(action.type==="Check_Pass"){
        return{name:action.val,isValid:action.val.trim().length >6};
    }
    if(action.type==="Valid_Pass"){
        return{name:state.name,isValid:state.name.trim().length >6};
    }
    return{name:"",isValid:false};

}
const Login=(props)=>{
    
    const [emailCheck,CheckEmail]=useReducer(EmailReducer,{name:"",isValid:null});
    const [passwordCheck,CheckPassword]=useReducer(PasswordReducer,{name:"",isValid:null});
    const [formValid,setFormValid]=useState(false);
    useEffect(()=>{
        var timer=setTimeout(()=>{
            console.log("input added");
            setFormValid(emailCheck.isValid && passwordCheck.isValid);
        },1000)
        return()=>{
            console.log("returned");
            clearTimeout(timer);
        }
        
    },[emailCheck.isValid,passwordCheck.isValid])
    const emailChangeHandler=(event)=>{
        CheckEmail({type:"Check_USer",val:event.target.value});
    }
    const passwordChangeHandler=(event)=>{
        CheckPassword({type:"Check_Pass",val:event.target.value});
    }
    const ValidEmail=()=>{
        CheckEmail({type:"Valid_User"});
    }
    const ValidPasswor=()=>{
        CheckPassword({type:"Valid_Pass"});
    }
    const SubmitHandler=(event)=>{
        event.preventDefault();
        localStorage.setItem("loginallow",1);
        props.onLoggIn(emailCheck.name,passwordCheck.name);
    }

    return(
        <Card className={classes.login}>
            <form onSubmit={SubmitHandler}>
                <div className={`${classes.controls} ${emailCheck.isValid===false ? classes.invalid : ''}`} >
                    <label htmlFor="email">UserName</label>
                    <input type="text" id="email" value={emailCheck.name} onChange={emailChangeHandler} 
                    onBlur={ValidEmail}/>
                </div>
                <div className={`${classes.controls} ${passwordCheck.isValid===false ? classes.invalid :''}`}>
                    <label htmlFor="password">Password</label>
                    <input type="password"  id="password" value={passwordCheck.name} onChange={passwordChangeHandler}
                    onBlur={ValidPasswor}/>
                </div>
                <div className={classes.actions}>
                    <Button type="submit" disabled={!formValid}>LoggIn</Button>
                </div>
            </form>
        </Card>
    );
};
export default Login;