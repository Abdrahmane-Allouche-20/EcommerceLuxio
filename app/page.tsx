// Import necessary modules and assets
import "./globals.css";
import Link from "next/link";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgArrowTopRight } from "react-icons/cg";
import Image from "next/image";
import airPods from "../public/airpods.webp";
import Cart from "../public/cart.webp";
import Contact from "../public/contact.webp";
import Favorite from "../public/favorite.webp";
import { Suspense, FC } from "react";
import Loading from "./Loading";

// Define the Home component as an FC (Functional Component) with no props
const Home: FC = () => {
  return (
    <section className="my-3 md:my-8 max-w-6xl md:mx-auto min-h-screen">
      <div className="p-1 md:p-2 w-full flex flex-col md:flex-row gap-3 h-[100vh]">
        <Suspense fallback={<Loading />}>
          <div className="p-2 md:p-6 flex-1 md:h-full h-[50vh] cursor-pointer hover:scale-[1.03] duration-300 bg-gradient-to-r from-[#6FC3FF] via-[#4a9cd7] to-[#2b75dd] rounded-2xl relative">
            <span className="text-white mb-6 capitalize font-semibold">
              More offers
            </span>
            <h1 className="text-[30px] md:text-[40px] lg:text-[50px] font-black text-shadow text-white md:w-[90%] lg:w-[70%] capitalize">
              There is something for everybody
            </h1>
            <Link
              href="/products"
              className="my-4 hover:scale-110 duration-300 rounded-sm md:rounded-full whiteGlass py-1 md:py-3 px-3 md:px-6 flex justify-between items-center text-base md:text-xl gap-3 md:gap-5 font-black w-fit"
            >
              <h1 className="shadowBlue text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-600 to-indigo-900">
                All Products
              </h1>
              <MdOutlineShoppingCart className="shadowPics text-[#1E3A8A] mt-1 text-xl md:text-2xl" />
            </Link>
            <div className="h-[70px] md:h-[100px]">
              <Image
                src={airPods}
                alt="airPods Pic"
                className="Img w-[120px] md:w-[200px] lg:w-[250px] absolute bottom-2 md:-bottom-6 lg:-bottom-10 right-4"
              />
            </div>
          </div>
        </Suspense>

        <div className="flex gap-1 md:h-full h-[50vh] md:flex-col flex-row md:gap-0 md:basis-[45%]">
          <Suspense fallback={<Loading />}>
            <div className="flex-1 bg-gradient-to-r from-violet-500 via-violet-600 to-indigo-600 p-1 md:p-6 md:mb-3 relative rounded-lg md:rounded-2xl md:h-[47.5%] cursor-pointer hover:scale-[1.03] duration-300">
              <div className="flex justify-between items-center">
                <h1 className="text-white text-sm md:text-base font-semibold">
                  My Cart
                </h1>
                <CgArrowTopRight className="text-white font-black text-base md:text-xl lg:text-2xl" />
              </div>
              <Image
                src={Cart}
                alt="announce"
                className="w-[100%] lg:w-[75%] Img absolute -translate-y-1/2 top-1/2 -right-5 md:-right-14"
              />
              <Link
                href="/cart"
                className="hover:text-black/80 absolute hover:-translate-y-2 duration-300 bottom-0 md:bottom-2 left-2 text-lg md:text-2xl lg:text-4xl text-shadow font-black text-white"
              >
                View Your Items
              </Link>
            </div>
          </Suspense>
          
          <div className="flex-1 md:h-[50%] flex flex-col md:flex-row gap-1 md:gap-3">
            <Suspense fallback={<Loading />}>
              <div className="bg-gradient-to-br from-violet-400 via-indigo-500 to-fuchsia-500 relative rounded-lg md:rounded-2xl p-1 md:p-4 flex-1 cursor-pointer hover:scale-[1.03] duration-300">
                <div className="flex justify-between items-center">
                  <h1 className="text-white font-semibold text-xs md:text-base">Email Us</h1>
                  <CgArrowTopRight className="text-white font-black text-lg md:text-xl lg:text-2xl" />
                </div>
                <Image
                  src={Contact}
                  alt="Contact"
                  className="w-[65%] md:w-[85%] lg:w-[100%] Img absolute -translate-y-1/2 top-1/2 right-0 md:-right-6"
                />
                <Link
                  href="/contact"
                  className="hover:text-black/80 absolute hover:-translate-y-2 duration-300 bottom-0 md:bottom-2 md:left-2 text-lg md:text-2xl lg:text-4xl text-shadow font-black text-white"
                >
                  Contact
                </Link>
              </div>
            </Suspense>
            
            <Suspense fallback={<Loading />}>
              <div className="bg-gradient-to-br from-[#00BFFF] via-blue-600 to-[#8A2BE2] relative rounded-lg md:rounded-2xl p-1 md:p-4 flex-1 cursor-pointer hover:scale-[1.03] duration-300">
                <div className="flex justify-between items-center">
                  <h1 className="text-white font-semibold text-xs md:text-base">My Favorite</h1>
                  <CgArrowTopRight className="text-white font-black text-lg md:text-xl lg:text-2xl" />
                </div>
                <Image
                  src={Favorite}
                  alt="Favorites"
                  className="w-[55%] md:w-[80%] lg:w-[90%] Img absolute -translate-y-1/2 top-1/2 right-2 md:-right-6"
                />
                <Link
                  href="/fav"
                  className="hover:text-black/80 absolute hover:-translate-y-2 duration-300 bottom-0 md:bottom-2 md:left-2 text-lg md:text-2xl lg:text-4xl text-shadow font-black text-white"
                >
                  Favorites
                </Link>
              </div>
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
