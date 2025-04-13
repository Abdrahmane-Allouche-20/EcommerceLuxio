
import Image from "next/image";

import { FaHeart, FaRegHeart } from "react-icons/fa"; 

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  brand: string;

  rating: number;
  images: string[];
  thumbnail: string;
}
interface Favorite {
  thumbnail: string;
  id: number;
  title: string;
  price: number;

}
interface ProductListProps {
  product: Product;
 
  handleCart: (product: Product) => void;
  handleFavorite: (product: Product) => void;
  favorites: Favorite[]; 
}
function ProductCard({
  product,
  handleCart,
  handleFavorite,
  favorites,
}: ProductListProps) {
 
  
 
  return (
    <div
      key={product.id}
      className="col-span-1 bg-[#f4cf49] rounded-xl p-2 md:p-3 from-blue-200">
      <div
        className={`flex relative bg-[#feeba86d] justify-center items-center rounded-lg  overflow-hidden `}>
        <Image
          src={product.thumbnail}
          priority
          className="hover:scale-110 duration-300 md:w-[150px] w-[100px]"
          alt={product.title}
          width={100}
          height={100}
          
        />
       
      
      </div>
      <div className={` my-2 md:my-3  `}>
        <h1 className={`text-sm md:text-base mb-1 md:mb-3  font-black  truncate`}>
          {product.title}
        </h1>
        <ul>
        <li className={`text-xs md:text-sm font-semibold `}>Rating: {product.rating}</li>
        {product.brand ? (
          <li className='text-xs md:text-sm font-semibold truncate '>
            Brand: {product.brand}
          </li>
        ) : null}
        <li className="flex justify-between items-center ">
          <span
            className='font-black'
          >
          <span className="text-xs md:text-sm font-bold">Price: </span>
             <span className="text-xs md:text-sm ">{product.price}$</span>  
          </span>
        </li>
     
        </ul>
       

      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={() => handleCart(product)}
          className="px-4 py-1.5  text-sm rounded-lg duration-300 hover:scale-110 bg-white  font-black"
        >
          Buy Item
        </button>
        <button onClick={() => handleFavorite(product)}>
          {favorites && favorites.some((fav) => fav.id === product.id) ? (
            <FaHeart
              className={`text-xl text-red-500 md:text-2xl`}
            />
          ) : (
            <FaRegHeart className="text-xl  md:text-2xl" />
          )}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
