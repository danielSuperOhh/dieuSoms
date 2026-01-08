import dieuSoms from '../assets/dieuSoms.jpg'
const Footer = () => {
  return (
    <footer className="bg-[#f6f1ec] text-gray-700 pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div className="w-25 h-25 rounded-full overflow-hidden flex items-center justify-center bg-gray-200 cursor-pointer">
            <img
            src={dieuSoms}
            alt="Logo"
            className="w-full h-full object-cover"
            />
        </div>

        {/* Shop */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-black cursor-pointer">All Products</li>
            <li className="hover:text-black cursor-pointer">New Arrivals</li>
            <li className="hover:text-black cursor-pointer">Best Sellers</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Help</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-black cursor-pointer">Contact Us</li>
            <li className="hover:text-black cursor-pointer">FAQ</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Join Our Newsletter</h4>
          <p className="text-sm mb-4">
            Get special offers and updates straight to your inbox.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-full border outline-none focus:ring-2 focus:ring-[#a58071]"
            />
            <button className="bg-[#a58071] text-white px-5 py-2 rounded-full hover:opacity-90 transition">
              Join
            </button>
          </div>
        </div>

      </div>

      <div className="mt-12 border-t border-gray-300 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} DieuSoms. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
