import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
function ProductDetail(){
    
    const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div className="">Loading product...</div>;
  }

  return (
    <>
    
    <h1 className="text-center my-4 ">Product Details</h1>
    <div className="container my-4 border rounded">
      <img className="justify-content-center align-item-center pe-5" src={product.image} alt={product.title}  height='400px' width='400px'/>
      <p>{product.category}</p>
      <h1>{product.title}</h1>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <div className="py-3">
      <NavLink to='/' className="btn btn-outline-primary mx-1">Buy Now</NavLink>
      <NavLink to='/' className="btn btn-outline-primary mx-1">Add to Cart</NavLink>
      </div>
    </div>
    </>

  );
    }export default ProductDetail;