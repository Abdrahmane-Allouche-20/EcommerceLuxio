import React from 'react';
import { MdProductionQuantityLimits, MdOutlinePayment } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const handleBuy = () => {
    toast.success("Thank you for your purchase! Your order has been placed.");
    ClearCart();
  };

  return (
    <div className="p-4 border-2 backdrop-blur-md bg-[#252422]   border-[#454443] rounded-2xl  shadow-sm">
      <h1 className="text-xl md:text-2xl font-black text-gray-400 text-center border-b-2 border-[#454443] pb-3 ">
        This Is Your Items
      </h1>

      <div className="flex justify-between mx-4 md:mx-8 items-center mt-8 border-b-2 border-[#454443] pb-3">
        <div className="flex text-lg font-bold gap-2 text-gray-400 items-center ">
          <MdProductionQuantityLimits size={22} />
          <span>Items:</span>
        </div>
        <span className="text-xl font-bold text-gray-400">{getTotalItems(cart)}</span>
      </div>

      <div className="flex justify-between mx-4 md:mx-8 items-center mt-6 border-b-2 border-[#454443] pb-3">
        <div className="flex text-lg font-bold text-gray-400 gap-2 items-center ">
          <MdOutlinePayment size={22} />
          <span>Total:</span>
        </div>
        <span className="text-lg font-bold text-green-700">${getTotalPrice(cart)}</span>
      </div>

      <div className="flex justify-center mt-8 mx-4 md:mx-8">
        <button
          onClick={handleBuy}
          className="px-6 py-2 w-full md:w-fit rounded-xl text-lg font-bold text-white bg-red-600 hover:bg-red-700 transition-colors duration-200"
        >
          I Want Them
        </button>
      </div>
      <ToastContainer position="top-right" autoClose={1500} hideProgressBar />
    </div>
  );
}

export default Price;
