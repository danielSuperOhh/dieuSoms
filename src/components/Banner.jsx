import crochetBanner from "../assets/crochetBanner.png";

const Banner = () => {
  return (
    <div className="relative w-full h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] overflow-hidden">
      {/* Background with parallax on desktop */}
      <div
        className="
          absolute inset-0 
          bg-cover bg-center 
          md:bg-fixed
        "
        style={{
          backgroundImage: `url(${crochetBanner})`,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div
        className="
          absolute 
          top-1/2 sm:top-[45%] md:top-[40%] lg:top-[65%] 
          left-1/2 -translate-x-1/2 -translate-y-1/2
          z-10 
          flex flex-col items-center text-center
          px-4 sm:px-6 md:px-12
          w-full
        "
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
          New Year Bundles & Deals
        </h1>
        <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-white/90 mb-3 sm:mb-4 md:mb-6">
          Up to 20% discount
        </p>
        <button className="bg-[#a58071] text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold hover:bg-[#925f57] transition-colors duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
