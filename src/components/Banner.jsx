import banner from '../assets/banner.jpg'

const Banner = () => {
  return (
    <div className='relative w-full h-120 md:h-[120] bg-gray-200 overflow-hidden'>
        <img 
            src={banner} 
            alt="banner" 
            className='absolute w-full h-full object-cover object-[50%_100%]'
        />

        <div className="absolute w-full h-full bg-black/25"></div>

        <div className="
            absolute 
            top-[65%] md:top-[55%] 
            left-1/2 -translate-x-1/2 -translate-y-1/2 
            z-10 
            flex flex-col items-center text-center 
            px-4 sm:px-6 md:px-12
            w-full
        ">
            <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4">
            New Year Bundles & Deals
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-white/90 mb-4 md:mb-6">
            Up to 20% discount
            </p>
            <button className="bg-[#a58071] text-white px-5 py-2.5 md:px-6 md:py-3 rounded-full font-semibold hover:bg-[#925f57] transition-colors duration-300">
            Shop Now
            </button>
        </div>    
      </div>
  )
}

export default Banner