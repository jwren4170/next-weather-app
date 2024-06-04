"use client";

import { MdWbSunny, MdOutlineLocationOn, MdMyLocation } from "react-icons/md";
import Searchbox from "./Searchbox";

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 z-50 bg-white px-8 shadow-sm">
      <div className="h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto">
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-3xl text-gray-500">Weather</h2>
          <MdWbSunny className="text-3xl text-yellow-300" />
        </div>
        {/* Location */}
        <section className="flex items-center gap-2">
          <MdMyLocation className="text-2xl text-gray-400 hover:opacity-80 cursor-pointer" />
          <MdOutlineLocationOn className="text-3xl" />
          <p className="text-slate-900/80 text-sm">New Haven</p>
          {/* Search */}
          <div>{/* <Searchbox /> */}</div>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
