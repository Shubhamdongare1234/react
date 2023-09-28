import { useEffect, useRef, useState } from "react";

const SimpleInput=(props)=>{
    const [EnterName,setName]=useState("");
    const [enterNameisValid,setEnterNameIsValid]=useState(true);
    // const nameInput=useRef();
    const [enterNameTouch,setEnterNameTouch]=useState(false);
    const nameInputValid=!enterNameisValid && enterNameTouch;
    const nameInputClass=nameInputValid ? "form-control invalid" : "form-control";

    useEffect(()=>{
        if(enterNameisValid){
            console.log("name is valid");
        }
    },[EnterName])
    const NameChaneHandler=(event)=>{
        if(event.target.value.trim()!==""){
            setEnterNameIsValid(true);
        }
         setName(event.target.value);
    }
    const onBlurChangeHandler=(event)=>{
        setEnterNameTouch(true);
        if(EnterName.trim()===""){
            setEnterNameIsValid(false);
            return;
        }

    }
    const formSubmitHandler=(event)=>{
        event.preventDefault();
        setEnterNameTouch(true);
        if(EnterName.trim()===""){
            setEnterNameIsValid(false);
            return;
        }
        setEnterNameIsValid(true);
        console.log(EnterName);
    }
    // const nameInputClass=enterNameisValid ? "form-control": "form-control invalid";

    return(
        <form onSubmit={formSubmitHandler}>
            <div className={nameInputClass}>
                <label htmlFor="name">
                    Your Name
                </label>
                <input type="text" id="name" 
                // ref={nameInput}
                 onChange={NameChaneHandler}
                 onBlur={onBlurChangeHandler}/>

            </div>
           {nameInputValid && <p className="error-text">Name must not me empty</p> }
            <div className="form-actions">
                <button>Submit</button>

            </div>
        </form>
    )
};
export default SimpleInput;