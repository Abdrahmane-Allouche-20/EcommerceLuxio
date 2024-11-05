"use client";
import ProductList from "./ProductList";
import  {useAppContext}from '../../context/index'
import { FaBoxOpen } from "react-icons/fa";
import React, {useState} from "react";
import Image from "next/image";
import CategoriesIcon from "../../public/categories.webp";
import { Suspense } from "react";
import Loading from "../Loading";

function Products() { 
  const {products,categories,totalProducts,favorites,finalPrice, handleCart, handleFavorite}=useAppContext()
   const [limit, setLimit] = useState(12);
   const [chosenCategory,setChosenCategory]=useState<string>('')
  const [showCategories, setShowCategories] = useState<boolean>(false);
  
   const increaseLimit = () => {
     setLimit((prev) => Math.min(prev + 16, totalProducts));
     if (limit + 10 >= totalProducts) {
       setLimit(totalProducts);
     }
   };

   const decreaseLimit = () => {
     setLimit((prev) => Math.max(prev - 16, 10));
   };


  const filteredProducts = products.filter(
    (product) => product.category === chosenCategory
  );
 

  
  return (
   
    <>
    
      <div className="flex flex-col md:flex-row gap-3 md:gap-5 mx-4  my-2 md:my-4">
      <div className={`p-2 md:p-4 bg-blue-50/50  ${showCategories ? "h-full w-full md:max-w-[15%]" : " h-fit w-fit"} overflow-hidden  shadow-xl rounded-xl relative  `}>
        <div className="flex justify-between items-center">
          <button
            onClick={() => setShowCategories(!showCategories)}
            className={` w-[20px] h-[20px] md:w-[30px] md:h-[30px]`}
          >
            <Image
              loading="lazy"
              src={CategoriesIcon}
              alt="categories icon"
              className="w-full"
            />
          </button>
    
          <h1
            className={`${showCategories ? "block" : "hidden"} text-base  md:text-xl font-black text-blue-900`}>
            Categories
          </h1>
        </div>
        <div className={`${showCategories ? "flex" : "hidden"} item-center gap-3 mt-3 md:mt-5`}>
          <button onClick={() => setChosenCategory("")}
            className="w-full rounded-lg md:rounded-xl  font-black text-xs  md:text-[16px] md:px-3 hover:scale-105 duration-300 capitalize text-white py-2  text-center bg-gradient-to-br from-sky-500 via-indigo-400 to-violet-500">
            All
          </button>
        </div>
        { <div
           className={`${
             showCategories ? "grid" : "hidden"
           }  grid-cols-3  md:grid-cols-1 gap-1 md:gap-3 mt-2 md:mt-5`}
         >
           {categories.length > 0
             ? categories.map((category, index) => (
                 <button
                   key={index}
                   onClick={() => setChosenCategory(category)}
                   className="w-full rounded-lg md:rounded-xl  font-black text-xs  md:text-[16px] md:px-3 hover:scale-105 duration-300 capitalize text-white py-2  text-center bg-gradient-to-br from-sky-600 via-indigo-500 to-violet-500 "
                 >
                   {category}
                 </button>
               ))
             : null}
         </div> }
      </div>
    
      <div className="flex-1 mx-auto p-2 md:p-4  bg-blue-50/50 shadow-xl rounded-xl ">
        <div className="flex  items-center gap-3 ">
          <FaBoxOpen className="text-2xl md:text-3xl lg:text-4xl text-indigo-950 mt-1" />
          <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-blue-600  to-violet-900 text-xl md:text-2xl lg:text-3xl font-black">
            Our Products
          </h1>
        </div>
        <Suspense fallback={<Loading/>}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 md:gap-3  my-5">
 {filteredProducts.length > 0
   ? filteredProducts.map((product) => (
       <ProductList
         key={product.id}
         product={product}
         handleCart={handleCart}
         handleFavorite={handleFavorite}
         favorites={favorites} 
         finalPrice={finalPrice}// Make sure to pass this
       />
     ))
   : products.slice(0, limit).map((product) => (
       <ProductList
         key={product.id}
         product={product}
         handleCart={handleCart}
         handleFavorite={handleFavorite}
         favorites={favorites}
         finalPrice={finalPrice} // Make sure to pass this
       />
     ))}
 <div className=" col-span-2 md:col-span-4 text-white flex justify-between items-center font-black mt-4 ">
   {limit < totalProducts && chosenCategory === "" && (
     <button
       onClick={increaseLimit}
       className=" hover:scale-110 duration-300 rounded-lg md:rounded-xl px-3 py-1.5 md:px-6 md:py-2.5 text-sm md:text-xl bg-sky-600  opacity-70 hover:opacity-100   overflow-hidden "
     >
       Show More
     </button>
   )}
   {limit > 30 && (
     <button
       onClick={decreaseLimit}
       className=" hover:scale-110 duration-300 rounded-lg md:rounded-xl px-3 py-1.5 md:px-6 md:py-2.5 text-sm md:text-xl bg-violet-600 opacity-70 hover:opacity-100  overflow-hidden "
     >
       Show Less
     </button>
   )}
 </div>
        </div>
        </Suspense>
      </div>
    </div>
    </>
  );
}

export default Products;
