import React from "react";
import { Logo3, cart, githublogo } from "../assets";
import { useSelector } from "react-redux";

const Header = () => {
  const productData=useSelector((state)=>state.bazar.productData)
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div>
          <img className="w-20" src={Logo3} alt="logoDark" />
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>
          <div className="relative">
            <img className="w-10" src={cart} alt="cart" />
            <span className="absolute w-6 top-2.5 left-2.5 text-xs flex items-center justify-center font-semibold">
              {productData.length}
            </span>
          </div>
          <img className="w-10" src={githublogo} alt="userlogo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
