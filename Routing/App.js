import logo from './logo.svg';
import {Navigate,Route,Routes} from 'react-router-dom';

import './App.css';
import Customer from './pages/customer';
import Product from './pages/product';
import Header from './components/Header';


function App() {
  function show(){
    return <h2>helloe</h2>
  }
 
  return (
    <div>
      <Header></Header>
      
      <Routes>
        <Route path="/customers" render={show}/>
        <Route path="/Products" element={<Product></Product>}/>
       
        <Route path='/Products/:id' element={<Product></Product>}/>
        <Route path='' element={<Navigate to="/customers"></Navigate>}/>
      </Routes>
    </div>
  );
}

export default App;
