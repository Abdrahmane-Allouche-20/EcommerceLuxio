import { Cart } from '@/context';
import Image from 'next/image';
import { FaPlus, FaMinus } from 'react-icons/fa6';

interface CartListProps {
  cart: Cart;
  IncreaseQuantity: (cart: Cart) => void;
  handleDecreaseQuantity: (cart: Cart) => void;
}

function CartList({ cart, handleDecreaseQuantity, IncreaseQuantity }: CartListProps) {
  const { thumbnail, title,price, quantity } = cart;

  return (
    <div className="p-1.5 md:p-4 bg-[#0152af] rounded-lg flex flex-col gap-3">
      <div className="rounded-lg w-full bg-blue-300 overflow-hidden flex justify-center">
        <Image
          src={thumbnail}
          alt={title || 'Cart product'}
          width={150}
          height={150}
          className="w-[100px] md:w-[200px] object-contain"
          loading="lazy"
        />
      </div>

      <div className="mt-1 text-sm sm:text-base text-white text-center">
        <h1 className="font-black truncate">{title}</h1>
        <p className="font-semibold mt-2">Price: ${price}</p>
      </div>

      <div className="flex items-center justify-between mt-1 text-white">
        <span className="text-sm sm:text-base font-semibold">
          Quantity: {quantity}
        </span>
        <div className="flex gap-1 items-center">
          <button
            aria-label="Increase quantity"
            onClick={() => IncreaseQuantity(cart)}
            className="w-[22px] md:w-[30px] h-[22px] md:h-[30px] flex justify-center items-center text-xs md:text-lg bg-green-500 rounded-md"
          >
            <FaPlus />
          </button>
          <button
            aria-label="Decrease quantity"
            onClick={() => handleDecreaseQuantity(cart)}
            className="w-[22px] md:w-[30px] h-[22px] md:h-[30px] flex justify-center items-center text-xs md:text-lg bg-red-500 rounded-md"
          >
            <FaMinus />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartList;
