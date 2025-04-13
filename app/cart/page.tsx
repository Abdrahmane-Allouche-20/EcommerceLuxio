'use client'
import React from 'react';
import { useAppContext } from '@/context';
import CartList from './cartList';
import Price from './Price';
import Store from '../../public/store.png';
import Image from 'next/image';
import Link from 'next/link';

function CartPage() {
  const { cart, ClearCart, IncreaseQuantity, handleDecreaseQuantity } = useAppContext();

  const isEmpty = cart.length === 0;

  return (
    <div className="max-w-6xl mx-auto p-4 my-2 md:my-4">
      <section className="flex gap-4 md:flex-row flex-col">
        {!isEmpty ? (
          <>
            <div className="basis-[60%] grid grid-cols-2 md:grid-cols-3 gap-3">
              {cart.map((item) => (
                <CartList
                  key={item.id}
                  cart={item}
                  IncreaseQuantity={IncreaseQuantity}
                  handleDecreaseQuantity={handleDecreaseQuantity}
                />
              ))}
            </div>
            <div className="flex-1">
              <Price cart={cart} ClearCart={ClearCart} />
            </div>
          </>
        ) : (
          <div className="flex-1">
            <Link href="/products">
              <div className="flex flex-col gap-6 justify-center items-center h-[70vh] transition-all duration-200">
                <p className="text-xl md:text-3xl lg:text-5xl text-center text-slate-900 font-black">
                  Oops! Your Hands Are Empty!
                </p>
                <Image
                  src={Store}
                  alt="Go To Store"
                  className="mx-auto w-[100px] hover:scale-110 transition-transform duration-200"
                  width={150}
                  height={150}
                  loading="lazy"
                />
               
              </div>
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}

export default CartPage;
