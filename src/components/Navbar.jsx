import { useState } from "react";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import { signOut } from "firebase/auth";
import { auth } from "../firebase";

import AuthModal from "./AuthModal";
import dieuSoms from "../assets/dieuSoms.JPG";

import { useCart } from "../context/CartContext";

import CartDrawer from "./CartDrawer";

const Navbar = ({ user }) => {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signin");
  const [profileOpen, setProfileOpen] = useState(false);

  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["Home", "Shop", "New & Trending"];

  const handleLogout = async () => {
    await signOut(auth);
    setProfileOpen(false);
  };

  const letter = user?.email?.charAt(0).toUpperCase();

  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-white [font-family:'Poiret One',sans-serif] select-none sticky top-0 z-50">
        {/* ================= DESKTOP ================= */}
        <div className="hidden md:flex items-center justify-between px-12 h-40">
          {/* Logo */}
          <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center bg-gray-200 cursor-pointer">
            <img src={dieuSoms} alt="Logo" className="w-full h-full object-cover" />
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">
            {/* Links */}
            {links.map((link) => (
              <a
                key={link}
                href="#"
                onClick={() => setActive(link)}
                className={`relative inline-block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#a58071] after:transition-all after:duration-300 hover:after:w-full ${
                  active === link ? "after:w-full" : ""
                }`}
              >
                {link}
              </a>
            ))}

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#a5807133] transition-colors duration-300">
                <MagnifyingGlassIcon className="w-6 h-6 text-gray-700" />
              </button>

              {/* Cart */}
              <button 
                onClick={() => setCartOpen(true)}
                className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#a5807133] transition">
                <ShoppingCartIcon className="w-6 h-6 text-gray-700" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#a58071] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* User */}
              {!user ? (
                <button
                  onClick={() => {
                    setAuthMode("signin");
                    setAuthOpen(true);
                  }}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#a5807133] transition-colors duration-300"
                >
                  <UserIcon className="w-6 h-6 text-gray-700" />
                </button>
              ) : (
                <div className="relative">
                  <button
                    onClick={() => setProfileOpen(!profileOpen)}
                    className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold"
                  >
                    {letter}
                  </button>

                  {profileOpen && (
                    <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-md">
                      <button
                        onClick={handleLogout}
                        className="w-full px-4 py-2 text-left hover:bg-gray-100 rounded-lg"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="flex md:hidden items-center justify-between px-4 h-40">
          {/* Menu */}
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <XMarkIcon className="w-6 h-6 text-gray-800" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-gray-800" />
            )}
          </button>

          {/* Logo */}
          <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
            <img src={dieuSoms} className="w-full h-full object-cover" />
          </div>

          {/* Cart */}
          <button 
            onClick={() => setCartOpen(true)}
            className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#a5807133] transition">
            <ShoppingCartIcon className="w-6 h-6 text-gray-700" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#a58071] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {menuOpen && (
          <div className="md:hidden h-screen px-4 pb-4 flex flex-col gap-4 bg-white shadow-md">
            {/* Search */}
            <div className="flex items-center gap-2 px-1 py-1">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-700" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full outline-none text-gray-700 border-none"
              />
            </div>

            {/* Cart Row */}
            {/* <div className="flex items-center justify-between">
              <div 
                onClick={() => setCartOpen(true)}
                className="flex items-center gap-2">
                <ShoppingCartIcon className="w-6 h-6 text-gray-700" />
                <span className="font-medium">Cart</span>
              </div>
              {totalItems > 0 && (
                <span className="bg-[#a58071] text-white text-xs px-2 py-1 rounded-full">
                  {totalItems}
                </span>
              )}
            </div> */}

            {/* User */}
            {!user ? (
              <div
                onClick={() => {
                  setAuthMode("signin");
                  setAuthOpen(true);
                  setMenuOpen(false);
                }}
                className="flex items-center gap-2 cursor-pointer"
              >
                <UserIcon className="w-6 h-6 text-gray-700" />
                <span className="text-gray-700 font-medium">Sign in</span>
              </div>
            ) : (
              <div
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="flex items-center gap-2 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-semibold">
                  {letter}
                </div>
                <span className="text-gray-700 font-medium">Logout</span>
              </div>
            )}

            {/* Links */}
            {links.map((link) => (
              <a
                key={link}
                href="#"
                onClick={() => {
                  setActive(link);
                  setMenuOpen(false);
                }}
                className={`relative inline-block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#a58071] after:transition-all after:duration-300 hover:after:w-full ${
                  active === link ? "after:w-full" : ""
                } py-1`}
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </nav>

      <AuthModal
        open={authOpen}
        onClose={() => setAuthOpen(false)}
        mode={authMode}
        setMode={setAuthMode}
      />

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

    </>
  );
};

export default Navbar;
