import { useState } from "react";
import MobileView from "./MobileView";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isopen, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-around items-center shadow-md  ">
        {/* logo */}
        <div>
          <img src="./blog.png" alt="logo" className="w-34 h-34" />
        </div>

        {/* nav items */}
        <div className="hidden md:flex">
          <nav>
            <ul className="flex items-center justify-between space-x-8  text-xl cursor-pointer">
              <li>Home</li>
              <li>About us</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>

        {/* login */}
        <div className="flex gap-4">
          <div>
            <button className=" rounded-full px-6 py-2 font-semibold cursor-pointer">
              login
            </button>
            <button className="bg-black text-white rounded-full px-5 py-2 font-semibold cursor-pointer">
              Sign up
            </button>
          </div>
          <div className="md:hidden mt-3" onClick={() => setOpen(!isopen)}>
            <Menu className="cursor-pointer" />
          </div>
        </div>
      </div>
      {isopen && <MobileView isopen={isopen} setOpen={setOpen} />}
    </>
  );
};

export default Navbar;
