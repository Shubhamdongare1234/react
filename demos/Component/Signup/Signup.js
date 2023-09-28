import { useRef } from 'react';
import Card from '../UI/Card';
import classes from './Signup.module.css';
const Signup=(props)=>{
    const nameRef=useRef('');
    const passwordRef=useRef('');
    const emailRef=useRef('');
    const phone_numberRef=useRef('');
    const MarksRef=useRef('');
    const YearRef=useRef('');

    const SubmitHandler=(event)=>{
        // console.log(event.target.value);
        event.preventDefault();
        const student={
            Name:nameRef.current.value,
            Password:passwordRef.current.value,
            Email:emailRef.current.value,
            Phone_number:phone_numberRef.current.value,
            Marks:MarksRef.current.value,
            Year:YearRef.current.value

        }
    props.addStudent(student);


    }
    return(
        <Card className={classes.signup}>
            <h2>
                Signup Form</h2>
                <form onSubmit={SubmitHandler}>
                    <div className={classes.control}>
                        <label htmlFor='name'>Name</label>
                        <input type="text" id="name" required ref={nameRef}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='password'>Password</label>
                        <input type="password" id="password" required ref={passwordRef}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='email'>Email</label>
                        <input type="email" id="email" required ref={emailRef}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='number'>Phone Number</label>
                        <input type="number" id="pnumber" required ref={phone_numberRef}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='Marks'>Marks</label>
                        <input type="number" id="Marks" required ref={MarksRef}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='joinDate'>Joined Year</label>
                        <input type="number" id="joinDate" required ref={YearRef}/>
                    </div>
                    <div className={classes.log}>
                       
                       <button className={classes.actions}>Signup</button>
                       <button className={classes.actions}>Cancel</button>
                       <a  onClick={props.login}>Login</a>
                    </div>
                </form>

            
        </Card>
    );
};
export default Signup;