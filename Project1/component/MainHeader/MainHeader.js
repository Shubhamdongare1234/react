import classes from "./MainHeader.module.css";
import Navigation from "./Navigation";
const MainHeader=(props)=>{
    return(
        <header className={classes['main-header']}>
            <h2>My Website</h2>
            <Navigation isLoggedIn={props.isAuthenticated}
            onLogout={props.onLogout}></Navigation>
        </header>
    );
};
export default MainHeader;