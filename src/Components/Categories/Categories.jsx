import React, { useEffect, useState } from "react";
import ele from "../../assets/Category images/Electronics.png";
import jewel from "../../assets/Category images/jewl.png";
import menwo from "../../assets/Category images/mewo.png";
const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        const data = await response.json();
        setCategories(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className=" grid grid-cols-4 grid-flow-rows-4  gap-2 mx-[320px] w-[1600px] h-[126px] bg-white ">
      {/* {categories.map((category, idx) => {
        return (
          <div>
            <span key={idx}>{category} </span>
            <img src={ele} alt="" />
          </div>
        );
      })} */}
      <div className="flex flex-col items-center ">
        <img src={ele} alt="" />
        <span>{categories[0]}</span>
      </div>
      <div className="flex flex-col items-center ">
        <img src={jewel} alt="" />
        <span>{categories[1]}</span>
      </div>
      <div className="flex flex-col items-center ">
        <img src={menwo} alt="" />
        <span>{categories[2]}</span>
      </div>
      <div className="flex flex-col items-center ">
        <img src={menwo} alt="" />
        <span>{categories[3]}</span>
      </div>
    </div>
  );
};

export default Categories;
