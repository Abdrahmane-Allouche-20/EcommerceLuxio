
import { category } from "@/public/Images";
import  {useState} from "react";
import Image from "next/image";
type Props = {
    categories: string[];
    setChosenCategory: (category: string) => void;
  };
function Categorie({categories,setChosenCategory}:Props) {
   
      const [showCategories, setShowCategories] = useState<boolean>(false);
     const AllCategories=["All",...categories]
  return (
   <div className={`p-2 md:p-4 bg-[#0152af5d]  ${showCategories ? "h-full w-full md:max-w-[20%]" : " h-fit w-fit"} overflow-hidden  shadow-xl rounded-xl relative  `}>
           <div className="flex justify-between items-center">
             <button
               onClick={() => setShowCategories(!showCategories)}
               className={` w-[20px] h-[20px] md:w-[30px] md:h-[30px]`}
             >
               <Image
                 loading="lazy"
                 src={category}
                 alt="categories icon"
                 className="w-full"
               />
             </button>
       
             <h1
               className={`${showCategories ? "block" : "hidden"} text-base  md:text-xl font-black text-white`}>
               Categories
             </h1>
           </div>
           { <div
              className={`${
                showCategories ? "grid" : "hidden"
              }  grid-cols-3  md:grid-cols-1 gap-1 md:gap-3 mt-2 md:mt-5`}
            >
              {AllCategories.length > 0
                ? AllCategories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => setChosenCategory(category)}
                      className="w-full rounded-lg   font-black text-xs sm:text-sm md:px-3 hover:scale-105 duration-300 capitalize text-white py-2  text-center bg-[#0152af] "
                    >
                      {category}
                    </button>
                  ))
                : null}
            </div> }
         </div>
  )
}

export default Categorie