import Customer from './Customer';
import classes from './CustomerList.module.css';
const CustomerList=(props)=>{
    return(
        <ul className={classes['customer-list']}>
            {props.customers.map((customer)=>(
                <Customer
                key={customer.id}
                name={customer.name}
                email={customer.email}
                tel={customer.tel}
                feedback={customer.feedback}></Customer>

                ))}

        </ul>
    );

};
export default CustomerList;