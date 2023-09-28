import classes from './Customer.module.css';
const Customer=(prosp)=>{
    return(
        <li className={classes.customer}>
            <h2>{prosp.name}</h2>
            <h3>{prosp.email}</h3>
            <h4>{prosp.tel}</h4>
            <p>{prosp.feedback}</p>

        </li>
    )
}
export default Customer;