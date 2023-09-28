import classes from './Product.module.css';
const Product=(props)=>{
    return(
        <div className={classes.product}>
            <h2>{props.name}</h2>
            <div className={classes.product_cost}>
                {props.cost}
            </div>

        </div>

    );
};
export default Product;