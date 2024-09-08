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
  }, [id]); 

  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-4 p-10 ">
      {prod && (
        <>
          <div className='flex justify-center items-center '>
            <img src={prod.image} alt={prod.title}  className=' max-w-[330px] h-full   '/>
          </div>
          <div className="flex justify-center items-centercol-start-1 row-start-2">
            <button className='shadow-lg bg-blue-200 rounded-md w-[220px] h-20 '>Buy Now</button>
          
          </div>
          <div className="col-start-2 row-start-2 ">
            <button  className=' rounded-md bg-blue-200 h-20  w-[220px] shadow-lg'>Add To Cart</button>
          </div>
          <div className="col-start-3 row-start-1 my-2">{prod.title}</div>
          <div className="row-start-2">${prod.price}</div>
          <div className="col-start-3 row-start-3">{prod.rating?.rate}</div>
        </>
      )}
    </div>
  );
};

export default ProductPage;
