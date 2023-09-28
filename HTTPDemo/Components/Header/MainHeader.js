import classes from './MainHeader.module.css';
import {Link} from 'react-router-dom';
const MainHeader=(props)=>{
    return(
        <header className={classes.header}>
            <h2>Welcome &copy</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/Customer" onClick={props.fetchProdcutHandler}>Customer
                        </Link>
                    </li>
                <li>
                    <Link to='/Product'>
                    Product</Link>
                </li>
                </ul>
                <ul>
                <li> <button onClick={props.customerUI}>Add  customer</button></li>
                

               <li><button onClick={props.productUI}>Add Product</button></li>
                
                </ul>
            </nav>
            

        </header>
    )
};
export default MainHeader;