import React from 'react'
import { MdProductionQuantityLimits,MdOutlinePayment } from "react-icons/md";



interface Cart {
  price: number;
  discountPercentage: number;
  thumbnail: string;
  id: number;
  title: string;
  quantity: number;
  finalPrice: number;
}

interface PriceProps {
  cart: Cart[]; // Update this to be an array of Cart items
  ClearCart:()=>void;
}

function Price({ cart,ClearCart }: PriceProps) {
  console.log(cart);

  function getTotalItems(cart: Cart[]) {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }
 function getTotalPrice(cart:Cart[]){
  return cart.reduce((total,item)=>total+item.finalPrice,0).toFixed(2)
 }
  return (
    <div className='p-2 md:p-4 border-2 border-blue-200 rounded-2xl'>
      <h1 className='text-xl font-black text-blue-950 text-center border-b-2 border-blue-100 pb-3'>This Is Your Items</h1>
      <div className='flex justify-between text-blue-950 mx-2 md:mx-8 items-center mt-8  border-b-2 border-slate-200 pb-3'>
        <div className='flex text-lg md:text-xl font-black gap-3 items-center '>
          <MdProductionQuantityLimits />
          items:
         
        </div>
        <span className='text-xl md:text-2xl font-black'>{getTotalItems(cart)}</span> 
      </div>
      <div className='flex justify-between text-blue-950 mx-2 md:mx-8 items-center mt-8  border-b-2 border-slate-200 pb-3'>
        <div className='flex text-lg md:text-xl font-black gap-3 items-center '>
          <MdOutlinePayment />
          Price:
         
        </div>
        <span className='text-xl md:text-2xl font-black'>{getTotalPrice(cart)}$</span> 
      </div>
      <div className='flex justify-center mx-2 md:mx-8 items-center mt-8 '>
        <button onClick={ClearCart}  className='px-4 md:w-fit w-full py-2 rounded-xl text-lg md:text-xl font-black text-white bg-blue-600 '>I Want Them</button>
      </div>
    </div>
  );
}

export default Price;
