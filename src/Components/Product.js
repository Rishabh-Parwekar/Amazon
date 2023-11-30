import { NavLink } from "react-router-dom";
import { useState,useEffect } from "react";

function Product(){
    const [products, setProducts] = useState(null);
    
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);

    
  if(!products){
    return <><h1>Loading the products...</h1></>
  }
    return (
        <>
      <h1 className="text-center my-4 ">Products</h1>
      

      <div className="container">
        <div className="row ">
            {products.map((product) => (
            <div class="card my-3 mx-5 py-2" style={{width: "17rem"}} key={product.id}>
                <img class="card-img-top" src={product.image} alt={product.title} height='250px' width='200px' />
                    <div class="card-body text-center">
                        <h5 class="card-title">{product.title}</h5>
                        <p className="lead">${product.price}</p>
                        <NavLink to={`/products/${product.id}`} type="button" class="btn btn-outline-primary">Add Product</NavLink>
                    </div>
</div>
 ))}
            </div>
        </div>


      </>
      )
    }export default Product;