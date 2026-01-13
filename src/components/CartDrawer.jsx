import { XMarkIcon, PlusIcon, MinusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useCart } from "../context/CartContext";

const CartDrawer = ({ open, onClose }) => {
  const { cartItems, addToCart, removeFromCart, decreaseQty } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <div
        className={`
          fixed top-0 right-0 h-full w-90 sm:w-100 bg-white z-50
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b-[0.5px] border-b-[#a58071]">
          <h2 className="text-base font-medium tracking-wide">Shopping Bag</h2>
          <button onClick={onClose}>
            <XMarkIcon className="w-6 h-6 text-gray-600 hover:text-black transition" />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col h-[calc(100%-64px)]">
          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
            {cartItems.length === 0 && (
              <p className="text-center text-gray-400 mt-20">Your cart is empty</p>
            )}

            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 pb-5 border-b last:border-b-0">
                <img
                  src={item.image}
                  className="w-20 h-24 object-cover rounded-md"
                  alt={item.name}
                />

                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-sm text-[#a58071] mt-1">
                        £{item.price.toFixed(2)}
                      </p>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 transition"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="w-7 h-7 border rounded-full flex items-center justify-center hover:bg-gray-100 transition"
                    >
                      <MinusIcon className="w-4 h-4" />
                    </button>

                    <span className="text-sm">{item.quantity}</span>

                    <button
                      onClick={() => addToCart(item)}
                      className="w-7 h-7 border rounded-full flex items-center justify-center hover:bg-gray-100 transition"
                    >
                      <PlusIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="px-6 py-5 space-y-4 border-t-[0.5px] border-t-[#a58071]">
            <div className="flex justify-between text-sm ">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">£{subtotal.toFixed(2)}</span>
            </div>

            <button
              className="w-full py-3 rounded-full bg-black text-white hover:bg-[#a58071] transition"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
