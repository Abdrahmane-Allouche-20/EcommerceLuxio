"use client";
import React from "react";
import Image from "next/image";

import { FaHeart, FaRegHeart } from "react-icons/fa"; // Ensure you import your icons

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  brand: string;
  discountPercentage: number;
  rating: number;
  images: string[];
  thumbnail: string;
}
interface Favorite {
  thumbnail: string;
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
}
interface ProductListProps {
  product: Product;
  handleCart: (product: Product) => void;
  handleFavorite: (product: Product) => void;
  favorites: Favorite[]; 
  finalPrice(price:number,Discount:number):string;// Include the favorites prop
}
function ProductList({
  product,
  handleCart,
  handleFavorite,
  favorites,
  finalPrice
}: ProductListProps) {
  const isEven=product.id % 2 === 0
  return (
    <div
      key={product.id}
      className="col-span-1 bg-gradient-to-b rounded-xl p-2 md:p-3 from-blue-200 via-indigo-200 to-violet-300">
      <div
        className={`flex relative justify-center items-center rounded-lg  overflow-hidden ${isEven ? " bg-violet-100": " bg-blue-100"}`}>
        <Image
          src={product.thumbnail}
          priority
          className="hover:scale-110 duration-300 md:w-[150px] w-[100px]"
          alt={product.title}
          width={150}
          height={150}
          
        />
        <div
          className={`absolute ${
            isEven
              ? "before:border-r-violet-100"
              : "before:border-r-blue-100"
          } top-1  md:top-2 left-0 z-10 px-0.5 pr-5 bg-gradient-to-br from-blue-800 via-violet-900 to-fuchsia-700 py-0.5 md:py-1.5 before:absolute before:border-[16px] before:border-transparent before:-translate-y-1/2 before:top-1/2 before:right-0  p-1.5 md:p-3 rounded-tr-md rounded-br-sm text-[8px] md:text-xs font-black text-white`}
        >
          -{product.discountPercentage}%
        </div>
      
      </div>
      <div className={`${isEven? "text-violet-950" : "text-blue-950"} my-2 md:my-3  `}>
        <h1 className={`text-sm md:text-xl mb-1 md:mb-3 text-center font-black  truncate`}>
          {product.title}
        </h1>
        <ul>
        <li className={`text-xs md:text-lg font-semibold `}>Rating: {product.rating}</li>
        {product.brand ? (
          <li className='text-xs md:text-lg font-semibold truncate '>
            Brand: {product.brand}
          </li>
        ) : null}
        <li className="flex justify-between items-center ">
          <span
            className='font-black'
          >
          <span className="text-xs md:text-lg font-bold">Price: </span>
             <span className="text-xs md:text-lg line-through opacity-40">{product.price}$</span>  
          </span>
        </li>
        {product.discountPercentage !== 0 ? (
          <li className='font-black text-sm md:text-xl' >
            new price: {' '} {finalPrice(product.price,product.discountPercentage)}
            $
          </li>
        ) : null}
        </ul>
       

      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={() => handleCart(product)}
          className="px-2 py-1.5 md:px-4 md:py-2 text-xs md:text-base rounded-lg md:rounded-xl bg-gradient-to-br focus:scale-90 duration-300 hover:scale-110 from-blue-800 via-violet-800 to-indigo-700 text-white font-black"
        >
          Buy Item
        </button>
        <button onClick={() => handleFavorite(product)}>
          {favorites && favorites.some((fav) => fav.id === product.id) ? (
            <FaHeart
              className={`${
                isEven ? "text-fuchsia-600" : "text-sky-500"
              } text-xl md:text-2xl`}
            />
          ) : (
            <FaRegHeart className="text-xl md:text-2xl" />
          )}
        </button>
      </div>
    </div>
  );
}

export default ProductList;
