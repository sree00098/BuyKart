import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const [prod, setProd] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProd(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchProducts();
  }, [id]); // Add 'id' as a dependency

  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-4">
      {prod && (
        <>
          <div>
            <img src={prod.image} alt={prod.title} />
          </div>
          <div className="col-start-1 row-start-2">
            <button>Buy Now</button>
          </div>
          <div className="col-start-2 row-start-2">
            <button>Add To Cart</button>
          </div>
          <div className="col-start-3 row-start-1">{prod.title}</div>
          <div className="row-start-2">${prod.price}</div>
          <div className="col-start-3 row-start-3">{prod.rating?.rate}</div>
        </>
      )}
    </div>
  );
};

export default ProductPage;
