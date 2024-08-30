import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Banner = () => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const gotToslide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setImages(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, []);

  const getGradient = () => {
    const gradients = [
      "bg-gradient-to-r from-slate-500 via-transparent to-slate-800",
      "bg-gradient-to-r from-black via-transparent to-gray-900",
      "bg-gradient-to-r from-amber-500 via-transparent to-amber-900",
      "bg-gradient-to-r from-teal-400 via-transparent to-cyan-400",
      "bg-gradient-to-r from-gray-400 via-transparent to-gray-400",
      "bg-gradient-to-r from-gray-400 via-transparent to-gray-400",
      "bg-gradient-to-r from-gray-400 via-transparent to-gray-400",
      "bg-gradient-to-r from-amber-400 via-transparent to-amber-400",
      "bg-gradient-to-r from-slate-900 via-transparent to-slate-900",
      "bg-gradient-to-r from-slate-400 via-transparent to-red-900",
    ];
    return gradients[currentSlide % gradients.length];
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="  relative grid grid-cols-2  justify-center items-center w-[1600px] h-[316px] mt-12 mx-auto">
      <div className="flex mt-28 mx-20">
        {images.length > 0 && (
          <span className="text-3xl">{images[currentSlide].category}</span>
        )}
      </div>

      {images.length > 0 && (
        <img
          src={images[currentSlide].image}
          alt="Slide"
          className="rounded-lg shadow-md h-[216px] w-auto object-cover z-10"
        />
      )}

      <div
        className={`absolute inset-0 ${getGradient()} rounded-lg opacity-40 z-0`}
      />

      <BsArrowLeftCircleFill
        onClick={prevSlide}
        className="absolute w-8 h-8 text-blue-900 left-4 cursor-pointer z-20"
      />
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="absolute w-8 h-8 text-blue-700 right-4 cursor-pointer z-20"
      />
      <span className="absolute bottom-4 flex mx-[520px] space-x-2 z-20">
        {images.map((_, idx) => (
          <div
            key={idx}
            onClick={() => gotToslide(idx)}
            className={`h-2 w-2  px-4 cursor-pointer ${
              currentSlide === idx ? "bg-orange-700" : "bg-white"
            } rounded-full border-none outline-none`}
          ></div>
        ))}
      </span>
    </div>
  );
};

export default Banner;
