'use client'
import React from 'react'
import Image from 'next/image'
import { Favorite } from '@/context'
interface favoriteListProps{
  favorite:Favorite,
  RemoveFavorite:(favorite: Favorite)=>void;
  handleCart:(favorite: Favorite)=>void;

}
function FavoriteList({favorite,RemoveFavorite,handleCart}:favoriteListProps) {
  return (
    <div  className={` col-span-1 rounded-xl  p-1.5 md:p-3  border-b-8 border-b-[#79651d] bg-[#f4cf49] `}>
         <div className='flex gap-2 md:gap-4'>
         <div className={` w-[100px]  md:basis-[35%] rounded-lg bg-[#ffeeae]`}>
          {/* Update Image component with width and height */}
          <Image 
            src={favorite.thumbnail} 
            alt={favorite.title} 
            width={150} // specify your desired width
            height={150} // specify your desired height
            className='w-full md:w-[150px] ' 
            layout='responsive' // optional, use if you want it to be responsive
            objectFit='cover' // optional, helps to maintain aspect ratio
          />
        </div>

          <div className='flex-1   text-sm sm:text-lg'>
            <h1 className='truncate font-black mb-1.5'>{favorite.title}</h1>
            <ul className='flex flex-col gap-1'>
              <li className='font-bold'>Brand: {favorite.brand}</li>
              <li className='font-bold'>Category: {favorite.category}</li>
              <li className='font-bold'>Price: {favorite.price}</li>
            </ul>

          </div>
          </div>
          <div className=' mt-3 flex flex-col md:flex-row justify-between lg:items-center text-xs sm:text-base font-black gap-2 '>
            <button onClick={()=>handleCart(favorite)} className='py-1.5 md:py-2 rounded-lg   md:px-3 bg-[#ffeeae]'>Buy Item</button>
            <button onClick={()=>RemoveFavorite(favorite)} className='py-1.5 md:py-2 rounded-lg   md:px-3 bg-[#ffeeae] '>Remove From Favorites</button>
          </div>
        </div>
  )
}

export default FavoriteList