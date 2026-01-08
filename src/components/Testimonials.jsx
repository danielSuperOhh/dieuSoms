import React from "react";

const testimonials = [
  {
    name: "Sarah M.",
    text: "Absolutely love the quality! The delivery was fast and the product exceeded my expectations.",
  },
  {
    name: "Daniel K.",
    text: "Great customer service and beautiful packaging. Will definitely order again!",
  },
  {
    name: "Emily R.",
    text: "The designs are stunning and the material feels premium. Highly recommended!",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-[#faf6f2] py-16 px-4 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What Our Customers Say
        </h2>
        <div className="w-16 h-0.5 bg-[#a58071] mx-auto mt-4"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <p className="text-gray-600 mb-6 leading-relaxed">“{t.text}”</p>

            <div className="font-semibold text-[#a58071]">{t.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
