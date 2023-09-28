import { useRef } from 'react';
import classes from './AddProduct.module.css';
const AddProduct=(props)=>{
    const nameRef=useRef('');
    const costRef=useRef('');

    const AddProductHandler=(event)=>{
        event.preventDefault();
        const product={
            name:nameRef.current.value,
            cost:costRef.current.value
        }
        props.AddNewProduct(product);


    }
    return(
        <form onSubmit={AddProductHandler}>
            <div className={classes.control}>
                <label htmlFor='name'>Name</label>
                <input type='text' id="name" ref={nameRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='cost'>Cost</label>
                <input type='text' id='cost' ref={costRef}/>
            </div>
            <div className={classes.control}>
                <button type="submit">Add Product</button>
            </div>
        </form>

    );
};
export default AddProduct;