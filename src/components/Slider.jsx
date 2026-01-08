import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import bag1 from '../assets/bag1.jpg'
import bag2 from '../assets/bag2.jpg'
import bag3 from '../assets/bag3.jpg'
import bag4 from '../assets/bag4.jpg'
import bag5 from '../assets/bag5.jpg'
import bag6 from '../assets/bag6.jpg'
import bag7 from '../assets/bag7.jpg'


const products = [
  {
    id: 1,
    name: "Crochet 1",
    price: "£23.00",
    oldPrice: "£34.00",
    rating: 4.4,
    colors: 16,
    image: bag1,
  },
  {
    id: 2,
    name: "Crochet 2",
    price: "£19.00",
    oldPrice: "£23.00",
    rating: 5.0,
    colors: 3,
    image: bag2,
  },
  {
    id: 3,
    name: "Crochet 3",
    price: "£23.00",
    oldPrice: "£31.00",
    rating: 4.8,
    colors: 9,
    image: bag3,
  },
  {
    id: 4,
    name: "Crochet 4",
    price: "£27.00",
    rating: 4.3,
    colors: 12,
    image: bag4,
  },
  {
    id: 5,
    name: "Crochet 5",
    price: "£21.00",
    rating: 4.6,
    colors: 7,
    image: bag5,
  },
    {
    id: 6,
    name: "Crochet 6",
    price: "£16.00",
    rating: 4,
    colors: 7,
    image: bag6,
  },
    {
    id: 7,
    name: "Crochet 7",
    price: "£21.00",
    rating: 4.2,
    colors: 2,
    image: bag7,
  },


];

const Slider = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const amount = 340;
    if (direction === "left") {
      sliderRef.current.scrollBy({ left: -amount, behavior: "smooth" });
    } else {
      sliderRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20 bg-[#faf7f3]">
      {/* Title */}
      <div className="text-center mb-10">
        <p className="tracking-widest text-sm text-gray-600">NEW YEAR DEALS</p>
        <div className="w-10 h-0.5 bg-gray-400 mx-auto mt-3" />
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-10
        w-12 h-12 rounded-full bg-white/80 backdrop-blur shadow
        flex items-center justify-center hover:scale-110 transition"
      >
        <ChevronLeftIcon className="w-5 h-5 text-gray-700" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-10
        w-12 h-12 rounded-full bg-white/80 backdrop-blur shadow
        flex items-center justify-center hover:scale-110 transition"
      >
        <ChevronRightIcon className="w-5 h-5 text-gray-700" />
      </button>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto scroll-smooth px-20 no-scrollbar"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-70 md:min-w-75 bg-transparent"
          >
            {/* Image Card */}
            <div className="relative overflow-hidden group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-95 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Floating Add To Cart */}
              <button
                className="absolute bottom-4 left-1/2 -translate-x-1/2
                px-6 py-2 rounded-full bg-white text-gray-900 text-sm font-medium shadow
                opacity-0 translate-y-4
                group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-300
                hover:bg-[#a58071] hover:text-white"
              >
                Add to Cart
              </button>
            </div>

            {/* Info */}
            <div className="pt-4 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900 text-sm">
                  {product.name}
                </h3>
                <span className="text-sm text-gray-700">⭐ {product.rating}</span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <span className="text-[#a58071] font-medium">{product.price}</span>
                {product.oldPrice && (
                  <span className="line-through text-gray-400">
                    {product.oldPrice}
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
    </section>
  );
};

export default Slider;
