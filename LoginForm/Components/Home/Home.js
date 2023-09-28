import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
const Home=(props)=>{
    return(
    <Card className={classes.home}>
        <h2 >Welcome</h2>
    </Card>
    );
};
export default Home;