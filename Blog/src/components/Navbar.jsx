import { useEffect, useState } from "react";
import MobileView from "./MobileView";
import { Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [isopen, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
        className={`flex w-full justify-around items-center fixed shadow-md transition-colors duration-300
    ${scroll ? "ng-opacity-50 backdrop-blur-lg shadow-md" : ""}
    ${
      theme === "dark"
        ? "bg-gray-900 text-white shadow-xs shadow-gray-800"
        : "bg-white text-black"
    }
  `}
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

        {/* login and theme toggle */}
        <div className="flex gap-4 items-center">
          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className="p-2 transition-all duration-200 cursor-pointer"
          >
            {theme === "light" ? (
              <Moon size={20} strokeWidth={2} />
            ) : (
              <Sun size={20} strokeWidth={2} />
            )}
          </button>

          <div>
            <button className="bg-black text-white rounded-full px-5 py-2 font-semibold cursor-pointer">
              Login
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
