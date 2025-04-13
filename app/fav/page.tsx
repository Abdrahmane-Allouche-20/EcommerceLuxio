'use client'
import React from 'react'
import { useAppContext } from '@/context'
import {heart} from '../../public/Images'
import Link from 'next/link'

import FavoriteList from './favoriteList';
import Image from 'next/image'
function Favorites() {
  const {favorites,handleCart,RemoveFavorite}=useAppContext();

  return (
    <div className='max-w-6xl mx-auto  rounded-lg my-2 md:my-4 p-2 md:p-4'>
      <article className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5'>
      {favorites.length>0?favorites.map((favorite)=>(
        <FavoriteList key={favorite.id}  favorite={favorite} handleCart={handleCart}  RemoveFavorite={RemoveFavorite}  />
      ))
      
      :
      <div className=' col-span-1 md:col-span-2  '>
       <Link href='/products'  className='flex h-[70vh] justify-center items-center flex-col text-2xl lg:text-4xl text-center text-blue-600 font-black'>
       <p>Add Some Product for Later Check</p>
        <Image src={heart} alt='add to favorite' className='md:w-[200px] w-[100px]'/>
        </Link>
      
      </div>
      }
      </article>
    </div>
  )
}

export default Favorites