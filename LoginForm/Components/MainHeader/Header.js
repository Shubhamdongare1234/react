import classes from "./Header.module.css";
import Navigation from "./Navigation/Navigation";
const Header=(props)=>{
    const LogoutHandler=()=>{
        props.LogOut();
    }
    return(
        <div className={classes.main_header}>
            <h2>Welcome to my Website</h2>
            <Navigation LogOut={LogoutHandler} 
            IsLogin={props.isAuthentication}
            ></Navigation>
        </div>

    );
};
export default Header;