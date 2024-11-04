"use client";
import Link from "next/link";
import "./header.css";
import Image from "next/image";
import diamond from "../../public/diamond.svg";
import { usePathname } from "next/navigation";
import { FaHouseChimney } from "react-icons/fa6";
import { FaTag, FaShoppingCart, FaBookmark, FaPaperPlane } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

function Header() {
  const navLinks = [
    { icon: <FaHouseChimney />, name: "Home", href: "/" },
    { icon: <FaPaperPlane />, name: "Contact", href: "/contact" },
    { icon: <FaTag />, name: "Products", href: "/products" },
    { icon: <FaShoppingCart />, name: "Cart", href: "/cart" },
    { icon: <FaBookmark />, name: "Favorites", href: "/fav" },
  ];

  const pathName = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  return (
    <header className="relative w-full z-20"> {/* Set z-index to 20 */}
      <div className="flex py-3 md:py-6 bg-gradient-to-r from-blue-100 via-blue-300 to-violet-500 px-5 justify-between items-center text-black rounded-bl-xl rounded-br-xl z-30">
        
        {/* Logo */}
        <div className="hover:scale-110 transition-all duration-500 flex items-center gap-1 md:gap-3">
          <Image src={diamond} width={30} height={30} alt="logo" className="w-[25px] md:w-[30px]" loading="lazy" />
          <h1 className="font-black text-transparent text-xl md:text-2xl bg-clip-text bg-gradient-to-r from-blue-500 via-blue-300 to-violet-500">
            Luxio
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <nav>
          <button className="md:hidden block text-white" onClick={toggleMenu}>
            {showMenu ? <IoClose size={24} /> : <IoMenu size={24} />}
          </button>

          {/* Navigation Links */}
          <ul className={`${showMenu ? "flex" : "hidden"} md:flex absolute md:relative top-[57px] left-0 md:top-0 w-full md:rounded-none rounded-xl md:w-auto z-30 bg-blue-300 md:bg-transparent flex-col md:flex-row justify-center items-center gap-5 py-4 md:py-0 text-base lg:text-xl font-black`}>
            {navLinks.map((link, index) => {
              const isActive = link.href === "/" ? pathName === "/" : pathName.startsWith(link.href);

              return (
                <li key={index} onClick={() => setShowMenu(false)}>
                  <Link
                    className={`${
                      isActive ? "-translate-y-2 text-violet-950 font-black" : "text-shadow text-white hover:-translate-y-2"
                    } duration-300 flex items-center gap-1.5`}
                    href={link.href}
                  >
                    <span className={`${isActive ? "text-violet-950" : "icon-shadow"} duration-300 text-lg`}>
                      {link.icon}
                    </span>
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu Background */}
      {showMenu && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10" // Ensure z-index is lower than header
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
}

export default Header;
