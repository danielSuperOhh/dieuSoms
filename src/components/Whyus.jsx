import {
  ArrowPathIcon,
  GlobeAltIcon,
  LockClosedIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: ArrowPathIcon,
    title: "30-DAY WARRANTY",
    desc: "We’ll replace damaged or defective items for free within 30 days of delivery.",
  },
  {
    icon: GlobeAltIcon,
    title: "AFFORDABLE WORLDWIDE SHIPPING",
    desc: "Ship anywhere. Orders ship within 5 working days.",
  },
  {
    icon: LockClosedIcon,
    title: "SECURE CHECKOUT",
    desc: "Shop with peace of mind.",
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: "QUESTIONS?",
    desc: "Email us at support@dieusoms.com",
  },
];

const Whyus = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#faf7f3]">
      <div className="text-center mb-12">
        <p className="tracking-widest text-xs sm:text-sm text-gray-700">
          WHY YOU'LL LOVE US
        </p>
        <div className="w-10 h-0.5 bg-gray-400 mx-auto mt-3" />
      </div>

      {/* Features grid */}
      <div
        className="
          max-w-7xl mx-auto px-4 sm:px-6 lg:px-12
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
          gap-10 sm:gap-12
          text-center
        "
      >
        {features.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <item.icon className="w-10 h-10 text-gray-400 mb-4" />

            <h3 className="text-sm font-semibold tracking-widest text-gray-900 mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-gray-600 max-w-xs">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Whyus;
