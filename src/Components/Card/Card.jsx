import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate();
  const [prod, setProd] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProd(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div
      className="grid grid-cols-5 grid-row-5 gap-4 pt-24 
     "
    >
      {prod.map((prd, idx) => {
        return (
          <div onClick={()=>navigate(`/${prd.id}`)} className="bg-slate-200 p-4 rounded-lg shadow-md hover:white-md transition-shadow duration-300 cursor-pointer items-center">
            <img
              src={prd.image}
              alt={prd.title}
              key={idx}
              className="h-28 w-28 object-cover mx-auto "
            />
            <span className="block mt-2 font-semibold text-gray-800">
              {prd.title}
            </span>
            <p className="text-gray-600">{prd.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
