import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { auth } from '../../Firebase/Firebase';
import { getAuth } from 'firebase/auth';
import { doc , addDoc , collection } from 'firebase/firestore';
import {db} from '../../Firebase/Firebase'


const ProductPage = () => {
  const navigate = useNavigate();
  const [prod, setProd] = useState({});
  const { id } = useParams();
  const auth = getAuth()
  const user = auth.currentUser
  function addtoCart(){
    if(user){
    handleCart(prod)}
    else{
      navigate('/log');
    }

  }

  const handleCart = async () => {
   
    
    if (user) {
      try {
        const cartCollection = doc(db, 'Cart', user.uid); // user id also added
        const cartItemsRef = collection(cartCollection, 'CartItems');

        // Changed `product` to `prod` to match your state variable
        await addDoc(cartItemsRef, {
          pId: prod.id, // Updated to use `prod` instead of `product`
          pName: prod.title,
          price: prod.price,
          imageUrl: prod.image,
        });
        console.log("Product Added Successfully");
      } catch (error) {
        console.error("Error Adding product:", error); // Added error logging for more clarity
      }
    }
  };

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
            <button onClick={handleCart} className=' rounded-md bg-blue-200 h-20  w-[220px] shadow-lg'>Add To Cart</button>
          </div>
          <div className="col-start-3 row-start-1 ">{prod.title}</div>
          <div className="row-start-2">${prod.price}</div>
          <div className="col-start-3 row-start-3">{prod.rating?.rate}</div>
        </>
      )}
    </div>
  );
};

export default ProductPage;
