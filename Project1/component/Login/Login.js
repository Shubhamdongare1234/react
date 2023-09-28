import { useEffect, useReducer, useState } from "react";
import classes from "./Login.module.css";
import Card from "../UIs/Card/Card";
import Button from "../UIs/Button/Button";
const emailReducer=(state,action)=>{
    if(action.type==="USER_INPUT"){
        return {value:action.val,isValid:action.val.includes('@')};
    }
    if(action.type==="USER_BLUR"){
        return{value:state.value,isValid:state.value.includes('@')};
    }
    return {value:"",isValid:false};

}
const passwordReducer=(state,action)=>{
    if(action.type==="USER_INPUT"){
        return {value:action.val,isValid:action.val.trim().length>6};
    }
    if(action.type==="USER_BLUR"){
        return{value:state.value,isValid:state.value.trim().length >6};
    }
    return {value:"",isValid:false};



}
const Login=(props)=>{
    // const [enterEmail,setEmail]=useState('');
    // const [emailValid,setEmailValid]=useState();
    // const [enterPassword,setPassword]=useState('');
    // const [passwordValid,setpasswordValid]=useState();
    const [formValid,setformValid]=useState(false);
    const [emialState,dispatchEmail]=useReducer(emailReducer,{value:"",isValid:null});
    const [passwordState,dispatchPassword]=useReducer(passwordReducer,{value:"",isValid:null});
    useEffect(()=>{
        var timer=setTimeout(()=>{
            console.log("Input has changed");
            setformValid(
                // enterEmail.includes('@') && enterPassword.trim().length >6
                emialState.isValid && passwordState.isValid
             );

        },1000)
        return()=>
        {
            console.log("returned is called");
            clearTimeout(timer);
        }
        
    },[emialState.isValid,passwordState.isValid])
    const emailChangHandler=(event)=>{
        // setEmail(event.target.value);
        dispatchEmail({type:"USER_INPUT",val:event.target.value});
        // setformValid(
        //     event.target.value.includes('@') && passwordState.value.trim().length >6
        // );

    }
    const passwordChangeHandler=(event)=>{
        dispatchPassword({type:"USER_INPUT",val:event.target.value});
        // setformValid(
        //     event.target.value.trim().length >6 && emialState.value.includes('@')
        // );

    };
    const validEmailHandler=()=>{
        // setEmailValid(emialState.value.includes('@'));
        dispatchEmail({type:"USER_BLUR"});

    }
    const validPasswordHandler=()=>{
        // setpasswordValid(passwordState.value.trim().length >6);
        dispatchPassword({type:"USER_BLUR"});

    };
    const submitHandler=(event)=>{
        event.preventDefault();
        localStorage.setItem("isLoggedIn",1);
        props.onLogin(emialState.value,passwordState.value);
    };
    return(
        
            <Card className={classes.login}>
                <form onSubmit={submitHandler}>
        <div className={`${classes.control} ${emialState.isValid === false ? classes.invalid :''}`}>
        
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={emialState.value} onChange={emailChangHandler}
            onBlur={validEmailHandler} />
        </div>
        <div className={`${classes.control} ${passwordState.isValid===false ? classes.invalid :''}`}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={passwordState.value} onChange={passwordChangeHandler
            } onBlur={validPasswordHandler} />
        </div>
        <div className={classes.actions}>
            <Button type="submit" className={classes.btn} disabled={!formValid}>
                Login
            </Button>
        </div>
    </form>

            </Card>
        
    
    );
};
export default Login;