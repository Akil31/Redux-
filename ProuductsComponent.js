import React from "react";
import { useSelector } from 'react-redux';

const ProductsComponent = () => {
    const products = useSelector((state) => state.allProducts.products)
    console.log(products);
    // const { id, name } = products;
    return (
        <div className="row" style={{ marginTop: '10px' }}>
        <div className="col-md-12 mx-0 mb-4">
          <div className='row'>
            <h1>cartcount</h1>
          </div>
          <div className="row">

            {/* {products.map((prdouct,index) => ( */}
                <div key='' className="col-11 col-md-6 col-lg-3 mx-0 mb-4" style={{ marginBottom: '18px' }}>
                  <div className='card overflow-hidden h-100 shadow'>
                    {/* <img className="card-img-top img-fluid " src=''
                      style={{ width: '100px', height: '100px', }} alt='' /> */}
                    <h5>{products.name}</h5>
                    <h6 className="card-text text-center">{products.id}</h6>
                    <h5 className="card-title text-center">$price</h5>
                    <button className="btn btn-success" 
                    // onClick={()=>dispatch(addProducts(product))}
 
                    >Add to Cart</button>
                  </div>  
                </div>
             {/* ))
           }    */}
          </div>
        </div>
      </div>
    )
}

export default ProductsComponent;