import Image from "next/image";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  // Toast handlers
  const handleAddCart = () => {
    handleCart(product);
    toast.success(`${product.title} added to cart!`);
  };

  const handleAddFavorite = () => {
    handleFavorite(product);
    if (favorites && favorites.some((fav) => fav.id === product.id)) {
      toast.info(`${product.title} removed from favorites.`);
    } else {
      toast.success(`${product.title} added to favorites!`);
    }
  };

  return (
    <div
      key={product.id}
      className="col-span-1 bg-[#252422] rounded-xl p-2 md:p-3 ">
      <div
        className={`flex relative border-2 border-[#454443] justify-center items-center rounded-lg  overflow-hidden `}>
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
        <h1 className={`text-sm md:text-base mb-1 md:mb-3  font-black  truncate text-gray-300`}>
          {product.title}
        </h1>
        <ul>
        <li className={`text-xs md:text-sm font-semibold text-gray-100`}>Rating: {product.rating}</li>
        {product.brand ? (
          <li className='text-xs md:text-sm font-semibold truncate text-gray-100'>
            Brand: {product.brand}
          </li>
        ) : null}
        <li className="flex justify-between items-center ">
          <span
            className='font-black text-gray-100'
          >
          <span className="text-xs md:text-sm font-bold">Price: </span>
             <span className="text-xs md:text-sm ">{product.price}$</span>  
          </span>
        </li>
        </ul>
      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={handleAddCart}
          className="px-4 py-1.5  text-sm rounded-lg duration-300 hover:scale-110 bg-gray-500 font-black"
        >
          Buy Item
        </button>
        <button onClick={handleAddFavorite}>
          {favorites && favorites.some((fav) => fav.id === product.id) ? (
            <FaHeart
              className={`text-xl text-red-500 md:text-2xl`}
            />
          ) : (
            <FaRegHeart className="text-xl  md:text-2xl text-white" />
          )}
        </button>
      </div>
      {/* Toast container for notifications */}
      <ToastContainer position="top-right" autoClose={1500} hideProgressBar />
    </div>
  );
}

export default ProductCard;
