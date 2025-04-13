import React from 'react';
import { MdProductionQuantityLimits, MdOutlinePayment } from 'react-icons/md';

interface Cart {
  price: number;
  thumbnail: string;
  id: number;
  title: string;
  quantity: number;

}

interface PriceProps {
  cart: Cart[];
  ClearCart: () => void;
}

function Price({ cart, ClearCart }: PriceProps) {
  const getTotalItems = (cart: Cart[]) =>
    cart.reduce((total, item) => total + item.quantity, 0);

  const getTotalPrice = (cart: Cart[]) =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="p-4 border-2 backdrop-blur-md bg-blue-600/20   border-[#0152af] rounded-2xl bg-white shadow-sm">
      <h1 className="text-xl md:text-2xl font-black text-center border-b-2 border-blue-100 pb-3 text-[#0152af]">
        This Is Your Items
      </h1>

      <div className="flex justify-between mx-4 md:mx-8 items-center mt-8 border-b-2 border-slate-200 pb-3">
        <div className="flex text-lg font-bold gap-2 items-center text-gray-800">
          <MdProductionQuantityLimits size={22} />
          <span>Items:</span>
        </div>
        <span className="text-xl font-bold text-gray-900">{getTotalItems(cart)}</span>
      </div>

      <div className="flex justify-between mx-4 md:mx-8 items-center mt-6 border-b-2 border-slate-200 pb-3">
        <div className="flex text-lg font-bold gap-2 items-center text-gray-800">
          <MdOutlinePayment size={22} />
          <span>Total:</span>
        </div>
        <span className="text-lg font-bold text-green-700">${getTotalPrice(cart)}</span>
      </div>

      <div className="flex justify-center mt-8 mx-4 md:mx-8">
        <button
          onClick={ClearCart}
          className="px-6 py-2 w-full md:w-fit rounded-xl text-lg font-bold text-white bg-[#0152af] hover:bg-blue-700 transition-colors duration-200"
        >
          I Want Them
        </button>
      </div>
    </div>
  );
}

export default Price;
