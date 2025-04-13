"use client";
import { useState, useMemo, Suspense } from "react";
import { FaBoxOpen } from "react-icons/fa";
import ProductCard from "./ProductCard";
import { useAppContext } from "../../context/index";
import Loading from "../Loading";
import Categorie from "./Categorie";

function Products() {
  const {
    products,
    categories,
    totalProducts,
    favorites,
    handleCart,
    handleFavorite,
  } = useAppContext();

  const [limit, setLimit] = useState(12);
  const [chosenCategory, setChosenCategory] = useState<string>("All");

  const filteredProducts = useMemo(() => {
    if (chosenCategory !== "All") {
      return products.filter((product) => product.category === chosenCategory);
    }
    return products.slice(0, limit);
  }, [products, chosenCategory, limit]);

  const increaseLimit = () => {
    setLimit((prev) => Math.min(prev + 16, totalProducts));
  };

  const decreaseLimit = () => {
    setLimit((prev) => Math.max(prev - 16, 10));
  };

  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-5 max-w-6xl mx-auto my-4">
      <Categorie
      
        categories={categories}
        setChosenCategory={setChosenCategory}
      />

      <div className="flex-1 mx-auto p-2 md:p-4 bg-[#feeba8] shadow-xl rounded-xl">
        <div className="flex items-center gap-3">
          <FaBoxOpen className="text-xl sm:text-3xl mt-1" />
          <h1 className="text-xl sm:text-2xl font-black">Our Products</h1>
        </div>

        <Suspense fallback={<Loading />}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1.5 md:gap-3 my-5">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                handleCart={handleCart}
                handleFavorite={handleFavorite}
                favorites={favorites}
              />
            ))}
          </div>

          <div className="flex justify-between items-center font-black mt-4 text-white">
            {limit < totalProducts && chosenCategory === "All" && (
              <button
                onClick={increaseLimit}
                className="rounded-lg px-3 py-1.5 text-base bg-sky-400 opacity-70 hover:opacity-100"
              >
                Show More
              </button>
            )}

            {limit > 30 && chosenCategory === "All" && (
              <button
                onClick={decreaseLimit}
                className="rounded-lg px-3 py-1.5 text-base bg-sky-400 opacity-70 hover:opacity-100"
              >
                Show Less
              </button>
            )}
          </div>
        </Suspense>
      </div>
    </div>
  );
}

export default Products;
