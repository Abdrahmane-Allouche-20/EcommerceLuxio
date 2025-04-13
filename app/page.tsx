import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgArrowTopRight } from "react-icons/cg";
import Loading from "./Loading";
import { airpods, cart, contact, favorite } from '../public/Images'

const cardStyle = "  cursor-pointer hover:scale-[1.03] duration-300 rounded-2xl relative";
const titleStyle = "text-white font-semibold text-xs md:text-base";
const iconStyle = "text-white font-black text-lg md:text-xl lg:text-2xl";
const linkTextStyle = "hover:text-black/80 absolute hover:-translate-y-2 duration-300 text-shadow font-black text-white";

export default function HeroSection() {
  return (
    <section className="my-3 md:my-8 max-w-6xl md:mx-auto ">
      <Suspense fallback={<Loading />}>
        <div className="p-1 md:p-2 w-full flex flex-col md:flex-row gap-3 h-[85vh]">

          {/* Left big card  f4cf49 0152af*/}

          <div className={`p-6 flex-1 h-full bg-[#0152af] ${cardStyle}`}>
            <span className="text-white mb-6 capitalize font-semibold">More offers</span>
            <h1 className="text-[20px] md:text-[40px] lg:text-[50px] font-black text-shadow text-white md:w-[90%] lg:w-[70%] capitalize">
              There is something for everybody
            </h1>
            <Link
              href="/products"
              className="my-4 hover:scale-110 duration-300 rounded-sm md:rounded-full whiteGlass py-1 md:py-3 px-3 md:px-6 flex justify-between items-center text-base md:text-xl gap-3 md:gap-5 font-black w-fit"
            >
              <h1 className="shadowBlue text-white">
                All Products
              </h1>
              <MdOutlineShoppingCart className=" text-white mt-1 text-xl md:text-2xl" />
            </Link>
            <Image
              src={airpods}
              alt="AirPods Pic"
              className="Img w-[120px] md:w-[200px] lg:w-[250px] absolute bottom-2 md:-bottom-6 lg:-bottom-10 right-4"
              priority
            />
          </div>


          {/* Right small cards */}
          <div className="flex gap-2 md:h-full h-[40vh] md:flex-col flex-row md:gap-0 md:basis-[45%]">
            {/* Cart Card */}

            <div className={`p-4 flex-1 bg-[#0152af]  md:mb-3 ${cardStyle}`}>
              <div className="flex justify-between items-center">
                <h1 className={titleStyle}>My Cart</h1>
                <CgArrowTopRight className={iconStyle} />
              </div>
              <Image
                src={cart}
                alt="Cart Preview"
                className="w-[100%] lg:w-[75%] Img absolute -translate-y-1/2 top-1/2 -right-5 md:-right-14"
              />
              <Link
                href="/cart"
                className={`${linkTextStyle} bottom-0 md:bottom-2 left-2 text-lg md:text-2xl lg:text-4xl`}
              >
                View Your Items
              </Link>
            </div>


            {/* Contact & Favorites Cards */}
            <div className="flex-1 md:h-[50%] flex flex-col md:flex-row gap-1 md:gap-3">
              {/* Contact */}

              <div className={`p-3 bg-[#f4cf49]  flex-1 ${cardStyle}`}>
                <div className="flex justify-between items-center">
                  <h1 className={titleStyle}>Email Us</h1>
                  <CgArrowTopRight className={iconStyle} />
                </div>
                <Image
                  src={contact}
                  alt="Contact"
                  className="w-[65%] md:w-[85%] lg:w-[100%] Img absolute -translate-y-1/2 top-1/2 right-0 md:-right-6"
                />
                <Link
                  href="/contact"
                  className={`${linkTextStyle} bottom-0 md:bottom-2 md:left-2 text-lg md:text-2xl lg:text-4xl`}
                >
                  Contact
                </Link>
              </div>


              {/* Favorites */}

              <div className={`bg-[#f4cf49] p-3 flex-1 ${cardStyle}`}>
                <div className="flex justify-between items-center">
                  <h1 className={titleStyle}>My Favorite</h1>
                  <CgArrowTopRight className={iconStyle} />
                </div>
                <Image
                  src={favorite}
                  alt="Favorites"
                  className="w-[70px] md:[100px] lg:w-[150px]  Img absolute -translate-y-1/2 top-1/2 right-6 "
                />
                <Link
                  href="/fav"
                  className={`${linkTextStyle} bottom-0 md:bottom-2 md:left-2 text-lg md:text-2xl lg:text-4xl`}
                >
                  Favorites
                </Link>
              </div>

            </div>
          </div>
        </div>
      </Suspense>
    </section>
  );
}
