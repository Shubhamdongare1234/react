import { useRef } from 'react';
import Card from '../UI/Card';
import classes from './Login.module.css';
const Login=(props)=>{
    const username=useRef('');
    const password=useRef('');

    const LoginHandler=(event)=>{
        event.preventDefault();
        const loginData={
            Name:username.current.value,
            password:password.current.value
        }
        props.CheckLoginData(loginData);
    }
    return(
        <Card className={classes.login}>
            <form onSubmit={LoginHandler}>
                <div className={classes.control}>
                    <label htmlFor='username'>UserName</label>
                    <input type='text' id='username' ref={username} />

                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Password</label>
                    <input type='passwrod' id='password'ref={password}/>
                    
                </div>
                <div className={classes.log}>
                    <button type='submit' className={classes.actions}>Login</button>
                    <a onClick={props.signup}>SignUp</a>
                </div>
            </form>
        </Card>

    );
};
export default Login;
