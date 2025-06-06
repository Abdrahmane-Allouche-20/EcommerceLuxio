
import { CgMenu } from "react-icons/cg";
import  {useState} from "react";

type Props = {
    categories: string[];
    setChosenCategory: (category: string) => void;
  };
function Categorie({categories,setChosenCategory}:Props) {
   
      const [showCategories, setShowCategories] = useState<boolean>(false);
     const AllCategories=["All",...categories]
  return (
   <div className={`p-2 md:p-4 bg-[#252422]  ${showCategories ? "h-full w-full md:max-w-[20%]" : " h-fit w-fit"} overflow-hidden  shadow-xl rounded-xl relative  `}>
           <div className="flex justify-between items-center">
             <button
               onClick={() => setShowCategories(!showCategories)}
           
             >
               <CgMenu className="text-gray-300 text-lg sm:text-3xl"/>
             </button>
       
             <h1
               className={`${showCategories ? "block" : "hidden"} text-gray-300 text-base  md:text-xl font-black `}>
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
                      className="w-full rounded-lg   font-black text-xs sm:text-sm md:px-3 hover:scale-105 duration-300 capitalize text-white py-2  text-center bg-[#454443] "
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