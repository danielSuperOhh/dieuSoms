import { useState } from "react";
import bag1 from "../assets/bag1.JPG";
import bag2 from "../assets/bag2.JPG";
import bag3 from "../assets/bag3.JPG";
import bag4 from "../assets/bag4.JPG";
import bag5 from "../assets/bag5.JPG";
import bag6 from "../assets/bag6.JPG";
import bag7 from "../assets/bag7.JPG";

import { useCart } from "../context/CartContext";

import { ShoppingCartIcon } from "@heroicons/react/24/outline";


const images = [bag1, bag2, bag3, bag4, bag5, bag6, bag7];

const products = images.map((img, index) => ({
  id: index + 1,
  name: `Crochet ${index + 1}`,
  price: "£23.00",
  oldPrice: index % 2 === 0 ? "£34.00" : null,
  rating: (4 + Math.random()).toFixed(1),
  colors: Math.floor(Math.random() * 12) + 3,
  image: img,
}));

const Product = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProducts = showAll ? products : products.slice(0, 8);

  const { addToCart } = useCart();


  return (
    <section className="py-16 sm:py-20 bg-[#faf7f3]">
      <div className="text-center mb-10 sm:mb-12">
        <p className="tracking-widest text-xs sm:text-sm text-gray-600">TRENDING</p>
        <div className="w-10 h-0.5 bg-gray-400 mx-auto mt-3" />
      </div>

      <div className="
        max-w-7xl mx-auto px-4 sm:px-6 lg:px-12
        grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
        gap-4 sm:gap-5 md:gap-6 lg:gap-8
      ">
        {visibleProducts.map((product) => (
          <div key={product.id} className="bg-transparent">
            <div className="relative overflow-hidden group">
              <img
                src={product.image}
                alt={product.name}
                className="
                  w-full
                  h-55 sm:h-65 md:h-75 lg:h-90
                  object-cover
                  transition-transform duration-500
                  group-hover:scale-105
                "
              />
              <button 
                onClick={() => addToCart(product)}
                className="
                  hidden md:block
                  absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2
                  px-4 sm:px-5 md:px-6 py-2
                  rounded-full
                  bg-white text-gray-900 text-xs sm:text-sm font-medium shadow
                  opacity-0 translate-y-4
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-300
                  hover:bg-[#a58071] hover:text-white
                "
              >
                Add to Cart
              </button>

              <button
                onClick={() => addToCart(product)}
                className="
                  md:hidden
                  absolute bottom-3 right-3
                  w-11 h-11
                  rounded-full
                  bg-white shadow
                  flex items-center justify-center
                  active:scale-95 transition
                "
              >
                <ShoppingCartIcon className="w-5 h-5 text-gray-800" />
              </button>
            </div>

            <div className="pt-3 sm:pt-4 space-y-1.5 sm:space-y-2">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-medium text-gray-900 text-xs sm:text-sm truncate">{product.name}</h3>
                <span className="text-xs sm:text-sm text-gray-700 shrink-0">⭐ {product.rating}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <span className="text-[#a58071] font-medium">{product.price}</span>
                {product.oldPrice && <span className="line-through text-gray-400">{product.oldPrice}</span>}
              </div>
              <p className="text-[10px] sm:text-xs text-gray-500">{product.colors} colors available</p>
            </div>
          </div>
        ))}
      </div>

      {!showAll && (
        <div className="flex justify-center mt-10 sm:mt-12">
          <button
            onClick={() => setShowAll(true)}
            className="
              px-8 sm:px-10 py-2.5 sm:py-3 rounded-full
              border border-gray-300
              text-gray-800 text-sm sm:text-base font-medium
              hover:bg-[#a58071] hover:text-white hover:border-[#a58071]
              transition-all duration-300
            "
          >
            Show More
          </button>
        </div>
      )}
    </section>
  );
};

export default Product;
