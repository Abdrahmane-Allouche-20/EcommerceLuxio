'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  brand: string;
  discountPercentage: number;
  rating: number;
  images: string[];
  thumbnail: string;
}

export interface Favorite {
  thumbnail: string;
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  description: string;
  category: string;
  rating: number;
  brand: string;
  images: string[];
}

export interface Cart {
  price: number;
  discountPercentage: number;
  thumbnail: string;
  id: number;
  title: string;
  quantity: number;
  finalPrice: number; // Add finalPrice to Cart interface
}

// Define the context type
interface ProductContextType {
  products: Product[];
  categories: string[];
  totalProducts: number;
  favorites: Favorite[];
  cart: Cart[];
  getTotalQuantity: () => number;
  handleCart: (product: Product) => void;
  IncreaseQuantity: (cart: Cart) => void;
  handleDecreaseQuantity: (item: Cart) => void;
  handleFavorite: (product: Product) => void;
  RemoveFavorite: (favorite: Favorite) => void;
  ClearCart:()=>void;
  finalPrice(price:number,Discount:number):string;
}

// Create context with a default value
const ProductContext = createContext<ProductContextType | null>(null);

interface GlobalStateProps {
  children: ReactNode;
}

// Mark this component as a Client Component
export const GlobalState: React.FC<GlobalStateProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [cart, setCart] = useState<Cart[]>([]);

  useEffect(() => {
    let isMounted = true; // Track if the component is mounted

    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=0", { cache: 'force-cache' });
        const data = await response.json();
        if (isMounted && data?.products) {
          setProducts(data.products);
          setCategories([...new Set<string>(data.products.map((product: Product) => product.category))]);
          setTotalProducts(data.total);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Cleanup function to mark as unmounted
    };
  }, []);

  function calculateFinalPrice(price: number, discountPercentage: number, quantity: number): number {
    return parseFloat(((price - price * (discountPercentage / 100)) * quantity).toFixed(2));
  }
  function RemoveFavorite(favorite:Favorite){
    setFavorites(favorites.filter(fav=>fav.id!==favorite.id))
  }
  function handleCart(product: Product) {
    setCart((prevItems) => {
      const isCart = prevItems.some((item) => item.id === product.id);
      if (isCart) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1, finalPrice: calculateFinalPrice(item.price, item.discountPercentage, item.quantity + 1) }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1, finalPrice: calculateFinalPrice(product.price, product.discountPercentage, 1) }];
      }
    });
  }
  function finalPrice(price:number,Discount:number):string{
    return (price - price * (Discount / 100)).toFixed(2)
   }

  function IncreaseQuantity(cartItem: Cart) {
    setCart((prevItems) => {
      return prevItems.map((item) =>
        item.id === cartItem.id
          ? { ...item, quantity: item.quantity + 1, finalPrice: calculateFinalPrice(item.price, item.discountPercentage, item.quantity + 1) }
          : item
      );
    });
  }

  function handleDecreaseQuantity(cartItem: Cart) {
    setCart((prevItems) => {
      return prevItems
        .map((item) =>
          item.id === cartItem.id
            ? { ...item, quantity: Math.max(item.quantity - 1, 0), finalPrice: calculateFinalPrice(item.price, item.discountPercentage, Math.max(item.quantity - 1, 0)) }
            : item
        )
        .filter((item) => item.quantity > 0); // Remove items with quantity 0
    });
  }

  function handleFavorite(product: Product) {
    const isFavorite = favorites.some((fav) => fav.id === product.id);
    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.id !== product.id));
    } else {
      setFavorites([...favorites, product]);
    }
  }

  function getTotalQuantity(): number {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }
function ClearCart(){
  setCart([])
}
  return (
    <ProductContext.Provider value={{ClearCart,finalPrice,RemoveFavorite, getTotalQuantity, handleDecreaseQuantity, products, IncreaseQuantity, categories,  totalProducts, favorites, cart, handleCart, handleFavorite }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use the ProductContext
export const useAppContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useAppContext must be used within a GlobalState");
  }
  return context;
};
