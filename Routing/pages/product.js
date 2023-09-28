import { useParams } from "react-router-dom";
const Product=()=>{
    const routerParams=useParams();
    return(
        <>
        <h1>This is Product Page</h1>
        <h2> the produxt id is {routerParams.id}</h2>
        </>
    )
}
export default Product;