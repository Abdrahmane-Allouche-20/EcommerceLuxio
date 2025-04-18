
import NavLinks from "./NavLinks";
function Header() {
  return (
    <header className="relative w-full ">
      <div className="flex max-w-6xl p-4 mx-auto   justify-between items-center  ">
        <div className=" flex items-center gap-1 md:gap-3">

          <h1 className="font-black text-red-600  text-xl md:text-2xl ">
            Luxio
          </h1>
        </div>
     <NavLinks/>
      </div>
    </header>
  );
}

export default Header;
