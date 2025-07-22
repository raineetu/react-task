import React from "react";

const MobileView = ({ isopen, setOpen }) => {
  return (
    <div
      className={`flex md:hidden flex-col gap-6 py-20 px-10 fixed top-0 bottom-0 right-0 w-64 shadow-lg z-50 h-screen bg-rose-50 transition-transform duration-300 transform ${
        isopen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close Button */}
      <div className="absolute top-5 right-5">
        <button
          className="text-2xl font-bold text-gray-700"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>
      </div>

      {/* Menu Items */}
      <ul className="flex flex-col gap-4 mt-10 text-lg font-semibold">
        <li onClick={() => setOpen(false)}>
          <a href="#top">Home</a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#about">About Us</a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#blog">Blog</a>
        </li>
        <li onClick={() => setOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default MobileView;
