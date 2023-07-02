import React from "react";
import { logo, lock, hamburgerMenu, close } from "../assets";
const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <div className="w-full h-[80px] bg-white border-b px-3">
      <div className="max-w-[1480px] m-auto w-full h-full flex justify-between items-center">
        <img src={logo} className="h-[25px]" />
        <div className="hidden md:flex items-center">
          <ul className="flex gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex ">
          <button className="flex items-center justify-between px-6 gap-2">
            <img src={lock} /> Login
          </button>
          <button className="px-8 py-3 rounded-md bg-[#20B486] text-white font-semibold">
            Sign Up For Free
          </button>
        </div>
        <div className="md:hidden cursor-pointer" onClick={handleToggle}>
          <img src={toggle ? close : hamburgerMenu} />
        </div>
      </div>
      <div
        className={
          toggle ? "absolute z-10 p-4 w-full px-8  md:hidden" : "hidden"
        }
      >
        <ul>
          <li className="p-4 hover:bg-gray-100 cursor-pointer">Home</li>
          <li className="p-4 hover:bg-gray-100 cursor-pointer">About</li>
          <li className="p-4 hover:bg-gray-100 cursor-pointer">Support</li>
          <li className="p-4 hover:bg-gray-100 cursor-pointer">Platform</li>
          <li className="p-4 hover:bg-gray-100 cursor-pointer">Pricing</li>
          <div className="flex flex-col my-4 gap-4">
            <button className="flex justify-center items-center  px-6 py-3 rounded-md gap-2 border border-[#20B486]">
              <img src={lock} /> Login
            </button>
            <button className="px-8 py-3 rounded-md bg-[#20B486] text-white font-semibold">
              Sign Up For Free
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
