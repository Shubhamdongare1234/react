import classes from './MainHeader.module.css';
const MainHeader=()=>{
    return(
        <header className={classes.header}>
            <h2>Student System</h2>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <a href="/">Guest</a>
                    </li>
                    <li><button className={classes.action}>Logout</button></li>
                </ul>

            </nav>
        </header>

    );
};
export default MainHeader;