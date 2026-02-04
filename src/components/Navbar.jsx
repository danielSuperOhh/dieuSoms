import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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

import { useSearch } from "../context/SearchContext";

const Navbar = ({ user }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signin");
  const [profileOpen, setProfileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const searchRef = useRef(null);

  const letter = user?.email?.charAt(0).toUpperCase();
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((s, i) => s + i.quantity, 0);

  const { query, setQuery } = useSearch();

  const links = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "New & Trending", path: "/trending" },
  ];

  const handleLogout = async () => {
    await signOut(auth);
    setProfileOpen(false);
  };

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="w-full bg-white [font-family:'Poiret One',sans-serif] sticky top-0 z-50">
        {/* ================= DESKTOP ================= */}
        <div className="hidden md:flex items-center justify-between px-12 h-40">
          {/* Logo */}
          <Link to="/" className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
            <img src={dieuSoms} alt="Logo" className="w-full h-full object-cover" />
          </Link>

          {/* Right */}
          <div className="flex items-center gap-6">
            {/* Links */}
            {links.map((link) => (
              <Link key={link.name} to={link.path}>
                <span
                  className={`relative inline-block pb-1
                    after:absolute after:left-1/2 after:bottom-0 after:h-0.5 after:bg-[#a58071]
                    after:-translate-x-1/2 after:transition-all after:duration-300
                    ${
                      location.pathname === link.path
                        ? "after:w-full"
                        : "after:w-0 hover:after:w-full"
                    }
                  `}
                >
                  {link.name}
                </span>
              </Link>
            ))}

            {/* Icons */}
            <div className="flex items-center gap-4">
              {/* SEARCH */}
              <div ref={searchRef} className="relative">
                <button
                  onClick={() => setSearchOpen((p) => !p)}
                  className="w-10 h-10 rounded-full hover:bg-[#a5807133] flex items-center justify-center transition"
                >
                  <MagnifyingGlassIcon className="w-6 h-6 text-gray-700" />
                </button>

                {searchOpen && (
                  <input
                    autoFocus
                    type="text"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      navigate("/shop");
                    }}
                    placeholder="Search products…"
                    className="
                      absolute right-0 top-12
                      w-56 px-4 py-2
                      bg-white border border-gray-200 rounded-full
                      text-sm text-gray-700
                      shadow-lg
                      focus:outline-none focus:border-[#a58071]
                    "
                  />
                )}
              </div>

              {/* Cart */}
              <button
                onClick={() => setCartOpen(true)}
                className="relative w-10 h-10 rounded-full hover:bg-[#a5807133] flex items-center justify-center"
              >
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
                  className="w-10 h-10 rounded-full hover:bg-[#a5807133] flex items-center justify-center"
                >
                  <UserIcon className="w-6 h-6 text-gray-700" />
                </button>
              ) : (
                <div className="relative">
                  <button
                    onClick={() => setProfileOpen(!profileOpen)}
                    className="w-10 h-10 rounded-full bg-black text-white font-semibold"
                  >
                    {letter}
                  </button>

                  {profileOpen && (
                    <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow">
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
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>

          <Link to="/" className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
            <img src={dieuSoms} className="w-full h-full object-cover" />
          </Link>

          <button
            onClick={() => setCartOpen(true)}
            className="relative w-10 h-10 rounded-full hover:bg-[#a5807133] flex items-center justify-center"
          >
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
          <div className="md:hidden px-4 pb-6 flex flex-col gap-4 bg-white shadow">
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                navigate("/shop");
                setMenuOpen(false);
              }}
              placeholder="Search products…"
              className="border px-4 py-2 rounded-full"
            />

            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="text-lg"
              >
                {link.name}
              </Link>
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
