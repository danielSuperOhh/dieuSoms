import { SparklesIcon } from "@heroicons/react/24/outline";
import Footer from "../components/Footer";

const Trending = () => {
  return (
    <div>
        <div className="min-h-screen bg-[#faf7f3] flex items-center justify-center px-6">
        <div className="max-w-xl text-center space-y-6">
            {/* Icon */}
            <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-[#a58071]/10 flex items-center justify-center">
                <SparklesIcon className="w-8 h-8 text-[#a58071]" />
            </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-light tracking-wide">
            New & Trending
            </h1>

            {/* Divider */}
            <div className="w-16 h-0.5 bg-[#a58071] mx-auto" />

            {/* Subtitle */}
            <p className="text-gray-600 text-lg leading-relaxed">
            We’re curating something special.
            <br />
            Exclusive drops. Elevated essentials.
            </p>

            {/* Coming Soon */}
            <span className="inline-block mt-4 px-6 py-2 border border-[#a58071] text-[#a58071] text-sm tracking-widest rounded-full">
            COMING SOON
            </span>
        </div>
        </div>
        <Footer />
    </div>
  );
};

export default Trending;
