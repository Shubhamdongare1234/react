import Product from './Product';
import classes from './ProductList.module.css';
const ProductList=(props)=>{
    return(
        <ul className={classes.Product_List}>
            {props.products.map((product)=>(
                <Product name={product.name}
                cost={product.cost}></Product>

            ))}
            
        </ul>
    );
};
export default ProductList;