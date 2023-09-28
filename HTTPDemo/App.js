import React from 'react';
import {Routes,Route} from 'react-router-dom'
import './App.css';
import CustomerList from './Components/CustomerList';
import { useState } from 'react';
import MainHeader from './Components/Header/MainHeader';
import ProductList from './Components/Product/ProductList';
import AddCustomer from './Components/AddCustomer';
import AddProduct from './Components/Product/AddProduct';

function App() {
  // const dummyCustomer=[
  //   {
  //     id:100,
  //     name:"laptop",
  //     cost:20300
  //   },
  //   {
  //     id:101,
  //     name:"Phone",
  //     cost:20000
  //   }

  // ];
  const [flag,setflag]=useState("");
  const [customers,setCustomers]=useState([]);
  const [products,setProducts]=useState([]);
  const [isLoading,setIsLoading]=useState(false);
  const [error,setError]=useState();
  const [custUI,setcustUI]=useState(null);
  const [prodUI,setprodUI]=useState(null);
  // const fetchCustomerHandler=()=>{
  //   fetch("http://localhost:3000/customer").
  //   then((response)=>{
  //     return response.json();
  //   })
  //   .then((data)=>{
  //     setCustomers(data);
  //   });
  // };
  const customerUI=()=>{
    setcustUI(true);
    setprodUI(false);
  }
  const productUI=()=>{
    setprodUI(true);
    setcustUI(false);
  }

   async function fetchProdcutHandler(){
    setflag("product");
    setIsLoading(true);
    setError(null);
    try{
      const productResponse=await fetch("http://localhost:3000/Product");
      if(!productResponse.ok){
        throw new Error("something went wrong in product request");
      }
      const data=await productResponse.json();
      setProducts(data);
    }catch(error){
      setError(error.message);

    }
    setIsLoading(false);

   }
  async function fetchCustomerHandler(){
    setflag("customer")
    setIsLoading(true);
    setError(null);
    try{
      const response=await fetch("http://localhost:3000/customer");
      if(!response.ok){
        throw new Error("Somthing went wrong in customer request");
      }
    const data=await response.json();
    setCustomers(data);

    }
    catch(error){
      setError(error.message);
    }
    
    setIsLoading(false);
  };
  let content;
  if(flag==="customer"){
  content=<p>Found no Customer</p>;
  if(customers.length>0){
    content=<CustomerList customers={customers}></CustomerList>;

  }
  if(error){
    content=<p>{error}</p>;
  }
  if(isLoading){
    content=<p>Loading Customers....</p>
  }
}
if(flag==="product"){
  content=<p>found no product</p>;
  if(products.length>0){
    content=<ProductList products={products}></ProductList>
  }
  if(isLoading){
    content=<p>Loding Product...</p>;
  }
  if(error){
    content=<p>{error}</p>
  }

}
async function addcutomerHandler(customer){
  const response=await fetch("http://localhost:3000/customer",{
    method:"POST",
    body:JSON.stringify(customer),
    headers:{
      "Content-type":"application/json"
    }
  })
  const data=await response.json();
  console.log(data);
  alert("New Customer Added")
  setcustUI(false);
}
async function AddNewProductHandler(product){
  
  const productRespone=await fetch("http://localhost:3000/Product",{
    method:"POST",
    body:JSON.stringify(product),
    headers:{
      "Content-type":"application/json"

    }
  })
  const data=await productRespone.json();
  console.log(data);
  alert("New Prouct Added");
  setprodUI(false);
}
  return (
    
    <React.Fragment>
      <MainHeader customerUI={customerUI} productUI={productUI}></MainHeader>
    {/* <section>
      <button onClick={fetchCustomerHandler}>fetch Customer</button>
    </section> */}
    {custUI && <section>
      <AddCustomer onAddCustomer={addcutomerHandler}></AddCustomer>
    </section>}
    {prodUI && <section>
      <AddProduct AddNewProduct={AddNewProductHandler}></AddProduct>
    </section>} 
    
    
    <section>
    <Routes>
      <Route path=''/>
      <Route path='/Customer' element={ <section>
      <button onClick={fetchCustomerHandler} >fetch Customer</button>
    </section>}/>
    <Route path='/Product' element={<section>
      <button onClick={fetchProdcutHandler} >fetch Product</button>
    </section>}/>
    
    </Routes>
      {content}
      {/* {!isLoading && error && (<p>{error}</p>)}
      {!isLoading && customers.length>0 && (<CustomerList customers={customers}></CustomerList>)}
      {!isLoading && customers.length===0 && !error && (<p>Found no Customer</p>)}
      {isLoading && (<p>Loading Customers....</p>)} */}
    </section>
    
    </React.Fragment>
   
  );
}

export default App;
