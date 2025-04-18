'use client'
import Link from "next/link";
import { FaHouseChimney } from "react-icons/fa6";
import { FaTag, FaShoppingCart, FaBookmark, FaPaperPlane } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

function NavLinks() {
    const pathName = usePathname();
    const navLinks = [
        { icon: <FaHouseChimney />, name: "Home", href: "/" },
        { icon: <FaPaperPlane />, name: "Contact", href: "/contact" },
        { icon: <FaTag />, name: "Products", href: "/products" },
        { icon: <FaShoppingCart />, name: "Cart", href: "/cart" },
        { icon: <FaBookmark />, name: "Favorites", href: "/fav" },
      ];
        const [showMenu, setShowMenu] = useState(false);
      
        const toggleMenu = () => setShowMenu((prev) => !prev);
  return (
    <>
    
    <nav>
          <button className="md:hidden block text-red-600" onClick={toggleMenu}>
                     {showMenu ? <IoClose size={24} /> : <IoMenu size={24} />}
              </button>

          
         <ul className={
        `${showMenu ? "flex" : "hidden"} md:flex absolute sm:bg-transparent bg-slate-950  md:relative top-20 left-1/2 -translate-x-1/2 md:top-0 p-6 sm:p-0 
           w-[90%]
          md:rounded-none rounded-xl
          md:w-auto z-30   flex-col md:flex-row justify-center  gap-5 
          text-base lg:text-lg font-black`}>
         {navLinks.map((link, index) => {
              const isActive = link.href === "/" ? pathName === "/" : pathName.startsWith(link.href);

              return (
                <li key={index} onClick={() => setShowMenu(false)}>
                  <Link
                    className={`${
                      isActive ? "translate-x-3  sm:-translate-x-0 text-red-600 font-black" : "text-shadow text-white  sm:hover:translate-x-0  hover:translate-x-3  sm:hover:-translate-y-1"
                    } duration-300 flex items-center gap-1.5`}
                    href={link.href}
                  >
                    <span className={`${isActive ? "text-red-600 " : "icon-shadow"} duration-300 text-lg`}>
                      {link.icon}
                    </span>
                    {link.name}
                  </Link>
                </li>
              );
            })}
         </ul>
       </nav>
    

     {showMenu && (
       <div
         className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10" // Ensure z-index is lower than header
         onClick={toggleMenu}
       ></div>
     )}
   
    </>
  )
}

export default NavLinks