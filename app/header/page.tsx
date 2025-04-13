
import NavLinks from "./NavLinks";
function Header() {
  return (
    <header className="relative w-full z-20 p-2">
      <div className="flex max-w-6xl p-4 mx-auto rounded-2xl bg-[#f4cf49]  justify-between items-center  z-30">
        <div className=" flex items-center gap-1 md:gap-3">

          <h1 className="font-black text-[#0152af] text-xl md:text-2xl ">
            Luxio
          </h1>
        </div>
     <NavLinks/>
      </div>
    </header>
  );
}

export default Header;
