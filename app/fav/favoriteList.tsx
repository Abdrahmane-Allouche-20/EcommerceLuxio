'use client'
import React from 'react'
import Image from 'next/image'
import { Favorite } from '@/context'
interface favoriteListProps{
  favorite:Favorite,
  RemoveFavorite:(favorite: Favorite)=>void;
  handleCart:(favorite: Favorite)=>void;
  finalPrice(price:number,Discount:number):string;
}
function FavoriteList({favorite,RemoveFavorite,handleCart,finalPrice}:favoriteListProps) {
  return (
    <div  className={` col-span-1 rounded-xl  p-1.5 md:p-3   bg-[#F5EFFF] `}>
         <div className='flex gap-2 md:gap-4'>
         <div className={` w-[100px]  md:basis-[35%] rounded-lg bg-[#CDC1FF]`}>
          {/* Update Image component with width and height */}
          <Image 
            src={favorite.thumbnail} 
            alt={favorite.title} 
            width={200} // specify your desired width
            height={200} // specify your desired height
            className='w-full md:w-[200px] ' 
            layout='responsive' // optional, use if you want it to be responsive
            objectFit='cover' // optional, helps to maintain aspect ratio
          />
        </div>

          <div className='flex-1  text-[#3B1E54] text-sm md:text-xl'>
            <h1 className='truncate font-black mb-1.5'>{favorite.title}</h1>
            <ul className='flex flex-col gap-1'>
              <li className='font-bold'>Brand: {favorite.brand}</li>
              <li className='font-bold'>Category: {favorite.category}</li>
              <li>
              {favorite.discountPercentage !== 0 ? (
          <span  className={`mt-3 font-black  }`} >
              price:{" "}
            {finalPrice(favorite.price,favorite.discountPercentage)}
            $
          </span>
        ) : null}
              </li>
            </ul>
            
          
         
         
          </div>
          </div>
          <div className=' mt-3 flex flex-col md:flex-row justify-between lg:items-center text-xs md:text-xl font-black gap-2 text-white'>
            <button onClick={()=>handleCart(favorite)} className='py-1.5 md:py-2 rounded-lg md:rounded-xl  md:px-3 bg-violet-600'>Buy Item</button>
            <button onClick={()=>RemoveFavorite(favorite)} className='py-1.5 md:py-2 rounded-lg md:rounded-xl  md:px-3 bg-violet-400 '>Remove From Favorites</button>
          </div>
        </div>
  )
}

export default FavoriteList