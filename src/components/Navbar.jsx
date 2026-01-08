import { useState } from "react";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import dieuSoms from '../assets/dieuSoms.jpg'

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["Home", "Shop", "New & Trending"];

  return (
    <nav className="w-full bg-white [font-family: 'Poiret One', sans-serif;]"> 
      <div className="hidden md:flex items-center justify-between px-12 h-40">

        <div className="w-25 h-25 rounded-full overflow-hidden flex items-center justify-center bg-gray-200 cursor-pointer">
        <img
            src={dieuSoms}
            alt="Logo"
            className="w-full h-full object-cover"
        />
        </div>

        <div className="flex items-center gap-6">
            {links.map((link) => (
            <a
                key={link}
                href="#"
                onClick={() => setActive(link)}
                className={`
                relative inline-block
                after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#a58071] 
                after:transition-all after:duration-3000 after:ease-in-out hover:after:w-full
                ${active === link ? "after:w-full" : ""}
                `}
            >
                {link}
            </a>
            ))}

          <div className="flex items-center gap-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#a5807133] transition-colors duration-300">
              <MagnifyingGlassIcon className="w-6 h-6 text-gray-700" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#a5807133] transition-colors duration-300">
              <ShoppingCartIcon className="w-6 h-6 text-gray-700" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#a5807133] transition-colors duration-300">
              <UserIcon className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex md:hidden items-center justify-between px-4 h-40 relative">
        <button
          className="w-8 h-8 flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <XMarkIcon className="w-6 h-6 text-gray-800" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-gray-800" />
          )}
        </button>

        <div className="w-25 h-25 rounded-full overflow-hidden flex items-center justify-center bg-gray-200 cursor-pointer">
            <img
            src={dieuSoms}
            alt="Logo"
            className="w-full h-full object-cover"
            />

        </div>
        

        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#2596be33] transition-colors duration-300">
          <ShoppingCartIcon className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden h-screen px-4 pb-4 flex flex-col gap-4 bg-white shadow-md">
          {/* Search */}
          <div className="flex items-center gap-2 px-1 py-1">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-700" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full outline-none text-gray-700   border-none"
            />
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <UserIcon className="w-6 h-6 text-gray-700" />
            <span className="text-gray-700 font-medium">Profile</span>
          </div>

          {links.map((link) => (
            <a
              key={link}
              href="#"
              onClick={() => {
                setActive(link);
                setMenuOpen(false); // close menu on click
              }}
              className={`
                relative inline-block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#2596be] 
                after:transition-all after:duration-300 hover:after:w-full
                ${active === link ? "after:w-full" : ""}
                py-1
              `}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
