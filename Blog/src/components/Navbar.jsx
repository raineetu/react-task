import { useEffect, useState } from "react";
import MobileView from "./MobileView";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [isopen, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`flex w-full justify-around items-center shadow-md fixed   ${
          scroll ? "ng-opacity-50 backdrop-blur-lg shadow-md" : ""
        }`}
      >
        {/* logo */}
        <div>
          <img src="./blog.png" alt="logo" className="w-34 h-34" />
        </div>

        {/* nav items */}
        <div className="hidden md:flex">
          <nav>
            <ul className="flex items-center justify-between space-x-8 text-[17px] cursor-pointer ">
              <li className="lihover">
                <a href="#">Home</a>
              </li>
              <li className="lihover">
                <a href="/">About us</a>
              </li>
              <li className="lihover">
                <a href="#blog">Blog</a>
              </li>
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
