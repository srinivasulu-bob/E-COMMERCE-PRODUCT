
import React, { useState } from 'react'
import axios from "axios"

const App = () => {

  const [searchTxt , setSearchTxt] = useState(' ');
  const [products , setProducts] = useState([]);

function onclickHandling(e){
    setSearchTxt(e.target.value);
}

async function getData(){
  try{
    let apiUrl = "https://dummyjson.com/products/search?q="+searchTxt;
    let response =await axios.get(apiUrl);
     setProducts(response.data.products);
  }
  catch(ex){
    alert(ex.message);
  }
}

  return (
    <>
       <div className='container'>
           <div className='row justify-content-center mt-5'>
               <div className='col-6'>
                   <input type='text'onClick={e =>onclickHandling(e)} className='form-control' placeholder='Search'/>
               </div>
               <div className='col-2'>
                  <button onClick={e => getData()} className='btn bth-warning'>Search</button>
               </div>
           </div>
       </div>
       {
        products.map(product => (
           
          <div className='row mt-5'>
            <div className='col-4'>
               <img src={product.thumbnail} className='img-fluid'/>
            </div>
            <div className='col-8'>
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              <h1>${product.price}</h1>
              <i className="bi bi-star-fill text-warning"></i>{product.rating}
              <h3>Stock : {product.stock}</h3>
            </div>
          </div>
        ))
       }
    </>
  )
}

export default App
