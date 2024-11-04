import React from 'react'
import { Cart } from '@/context'
import Image from 'next/image'
import { FaPlus ,FaMinus } from "react-icons/fa6";
interface CartListProps{
  cart:Cart;
  IncreaseQuantity: (cart: Cart) => void;
  handleDecreaseQuantity: (item: Cart) => void;
}
function CartList({cart,handleDecreaseQuantity,IncreaseQuantity}:CartListProps) {
  console.log(cart)
  return (
    <div className='  rounded-md'>
      <div className='col-span-1 p-1.5 md:p-4 bg-blue-200 rounded-lg  gap-3'>
        <div className='rounded-lg w-full bg-blue-100 overflow-hidden'>
          <Image src={cart.thumbnail}   className='mx-auto w-[100px] md:w-[200px] '  loading='lazy' width={150} height={150} alt={cart.title}/>
        </div>
        <div className='mt-3 text-blue-950'>
        <h1 className='text-sm text-center md:text-lg font-black truncate'>{cart.title}</h1>
        <p className='text-sm md:text-base font-bold mt-2'>Price: <span className='text-sm md:text-base'>{cart.finalPrice} $</span></p>
        </div>
        <div className='flex items-center justify-between mt-1 '>
          <span className='text-sm md:text-lg font-black text-blue-950'>Quantity : {cart.quantity}</span>
<div className='flex gap-1 justify-end items-center'>
<button className='w-[18px] md:w-[30px] h-[18px] md:h-[30px] flex justify-center items-center  text-white text-xs md:text-lg  bg-green-500 rounded-md' onClick={()=>IncreaseQuantity(cart)}><FaPlus /></button>
<button className='w-[18px] md:w-[30px] h-[18px] md:h-[30px] flex justify-center items-center  text-white text-xs md:text-lg  bg-red-500 rounded-md' onClick={()=>handleDecreaseQuantity(cart)}><FaMinus/></button>
</div>
</div>
        
      </div>
    </div>
  )
}

export default CartList