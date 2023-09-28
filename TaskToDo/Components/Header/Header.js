import { useRef } from 'react';
import classes from './Header.module.css';
const Header=(props)=>{


    const onchangeHandler=(event)=>{
        const value=event.target.value;
        console.log(value);
        props.SearchHand(value);
    }
    // const Searchhandle=(event)=>{
    //     const value=event.target.value;

    //     console.log(value);
    // props.searchHand(value);

    // }
   
    


    return(
        <div className={classes.header}>
            <h2>THINGS TO DO</h2>
            <input type='text' placeholder='Add Now' onChange={onchangeHandler} />

        </div>
    );
};
export default Header;