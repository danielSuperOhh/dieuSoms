import { useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useCart } from "../context/CartContext";
import { useSearch } from "../context/SearchContext";

import bag1 from "../assets/bag1.JPG";
import bag2 from "../assets/bag2.JPG";
import bag3 from "../assets/bag3.JPG";
import bag4 from "../assets/bag4.JPG";
import bag5 from "../assets/bag5.JPG";
import bag6 from "../assets/bag6.JPG";
import bag7 from "../assets/bag7.JPG";
import bag8 from "../assets/bag8.jpg";
import bag9 from "../assets/bag9.jpg";
import bag10 from "../assets/bag10.jpg";
import bag11 from "../assets/bag11.jpg";
import bag12 from "../assets/bag12.jpg";
import bag13 from "../assets/bag13.jpg";
import bag14 from "../assets/bag14.jpg";
import bag15 from "../assets/bag15.jpg";
import bag16 from "../assets/bag16.jpg";
import bag17 from "../assets/bag17.jpg";
import bag18 from "../assets/bag18.jpg";
import bag19 from "../assets/bag19.jpg";
import bag20 from "../assets/bag20.jpg";

import Footer from "../components/Footer";

const images = [
  bag1, bag2, bag3, bag4, bag5,
  bag6, bag7, bag8, bag9, bag10,
  bag11, bag12, bag13, bag14, bag15,
  bag16, bag17, bag18, bag19, bag20
];

// ✅ realistic crochet bag names
const bagNames = [
  "Willow Crochet Tote",
  "Luna Handwoven Bag",
  "Sienna Crochet Shoulder Bag",
  "Olive Market Tote",
  "Aurora Knit Crossbody",
  "Marigold Crochet Pouch",
  "Ember Boho Bag",
  "Solstice Crochet Carryall",
  "Daisy Mini Crochet Bag",
  "Ivy Everyday Tote",
  "Nola Crochet Handbag",
  "Cleo Woven Shoulder Bag",
  "Harper Soft Crochet Tote",
  "Zara Bohemian Bag",
  "Mila Crochet Crossbody",
  "Opal Weekend Tote",
  "Aria Handcrafted Bag",
  "Indie Crochet Sling",
  "Nova Crochet Satchel",
  "Rhea Artisan Tote"
];

// create up to 32 items
const products = Array.from({ length: 32 }).map((_, i) => ({
  id: i + 1,
  name: bagNames[i % bagNames.length],
  price: 23,
  oldPrice: i % 3 === 0 ? 34 : null,
  rating: (4 + Math.random()).toFixed(1),
  colors: Math.floor(Math.random() * 8) + 3,
  image: images[i % images.length],
}));

const Shop = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  const { addToCart } = useCart();
  const { query } = useSearch();

  // ✅ SEARCH FILTER
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <section className="bg-[#faf7f3] pt-20">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="tracking-widest text-sm text-gray-600">SHOP</p>
        <h1 className="mt-3 text-2xl sm:text-3xl font-light">
          {query ? `Search results for "${query}"` : "All Products"}
        </h1>
        <div className="w-12 h-0.5 bg-gray-400 mx-auto mt-4" />
      </div>

      {/* Grid */}
      <div className="
        max-w-7xl mx-auto px-4 sm:px-6 lg:px-12
        grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
        gap-4 sm:gap-6 lg:gap-8
      ">
        {visibleProducts.map((product) => (
          <div key={product.id}>
            <div className="relative overflow-hidden group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover group-hover:scale-105 transition"
              />

              <button
                onClick={() => addToCart(product)}
                className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-white shadow text-sm opacity-0 group-hover:opacity-100 transition hover:bg-[#a58071] hover:text-white"
              >
                Add to Cart
              </button>

              <button
                onClick={() => addToCart(product)}
                className="md:hidden absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-[#a58071] hover:text-white"
              >
                <ShoppingCartIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="pt-4 space-y-1">
              <div className="flex justify-between">
                <h3 className="text-sm font-medium truncate">{product.name}</h3>
                <span className="text-sm">⭐ {product.rating}</span>
              </div>

              <div className="flex gap-2 text-sm">
                <span className="text-[#a58071]">£{product.price.toFixed(2)}</span>
                {product.oldPrice && (
                  <span className="line-through text-gray-400">
                    £{product.oldPrice.toFixed(2)}
                  </span>
                )}
              </div>

              <p className="text-xs text-gray-500">
                {product.colors} colors available
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-16">
          No products match your search.
        </p>
      )}

      {/* Show More */}
      {visibleCount < filteredProducts.length && (
        <div className="flex justify-center mt-14 pb-20">
          <button
            onClick={() => setVisibleCount(v => v + 8)}
            className="px-10 py-3 rounded-full border text-sm hover:bg-[#a58071] hover:text-white transition"
          >
            Show More
          </button>
        </div>
      )}

      <Footer />
    </section>
  );
};

export default Shop;
