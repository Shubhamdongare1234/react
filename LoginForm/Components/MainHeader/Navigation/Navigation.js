
import classes from "./Navigation.module.css";
const Navigation=(props)=>{
    const LogoutHandler=()=>{
        props.LogOut();
    }
    return(
        <nav className={classes.nav}>
            <ul>
                <li>
                    <a href="/">Guest</a>
                </li>
                {props.IsLogin && (<li>
                    <a href="/">User</a>
                </li>) }
                
               {props.IsLogin && (<li>
                    <a href="/">Admin</a>
                </li>)}
                {props.IsLogin && (<li>
                <button className={classes.button} onClick={LogoutHandler}>LogOut</button>
                </li>)}
            </ul>
        </nav>
    );

};
export default Navigation;