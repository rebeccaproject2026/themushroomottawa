import { X } from "lucide-react";
import { Icon } from "@iconify/react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartDrawer({ isOpen, onClose }) {
  const { cartItems, removeFromCart, subtotal } = useCart();
  const freeShippingThreshold = 150;
  const progress = Math.min((subtotal / freeShippingThreshold) * 100, 100);
  const remaining = Math.max(freeShippingThreshold - subtotal, 0);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-85 bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-5 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 nav-poppins">
            Shopping cart
          </h2>
          <button
            onClick={onClose}
            className="flex items-center gap-1 text-sm font-semibold text-gray-800 hover:text-gray-500 transition cursor-pointer"
          >
            <X className="w-4 h-4" />
            Close
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 px-6">
              <Icon
                icon="mdi:cart-outline"
                className="w-20 h-20 text-gray-300"
              />
              <p className="text-gray-500 text-sm">No products in the cart.</p>
              <Link
                to="/shop"
                onClick={onClose}
                className="bg-[#003465] text-white text-sm font-semibold uppercase px-6 py-3 hover:bg-[#004a8f] transition cursor-pointer"
              >
                Return to Shop
              </Link>
            </div>
          ) : (
            <div className="flex flex-col">
              {/* Cart Items */}
              {cartItems.map((item) => (
                <div
                  key={item.key}
                  className="flex items-start gap-3 p-4 hover:bg-gray-100 transition cursor-pointer"
                >
                  <div className="aspect-square">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className=" w-16 h-16 object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm nav-poppins font-medium text-gray-800 truncate">
                      {item.product.name} – {item.quantity}
                    </p>
                    <p className="text-[13px] nav-lato text-gray-400 mt-1.5">
                      {item.qty} ×{" "}
                      <span className="text-[#003465] font-semibold">
                        ${item.product.price.toFixed(2)}
                      </span>
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.key)}
                    className="text-gray-500 hover:text-gray-400 transition cursor-pointer shrink-0"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer - only when items exist */}
        {cartItems.length > 0 && (
          <div className=" flex flex-col gap-4">
            {/* Subtotal */}
            <div className="flex items-center justify-between border-t border-b p-4 border-gray-200">
              <span className="text-lg nav-lato font-semibold text-[#242424]">
                Subtotal:
              </span>
              <span className="text-lg nav-lato font-bold text-[#003465]">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            {/* Free shipping progress */}
            <div className="flex flex-col gap-2 px-4">
              <p className="text-sm text-[#777777] nav-lato">
                Add{" "}
                <span className="font-semibold text-[#003465] ">
                  ${remaining.toFixed(2)}
                </span>{" "}
                to cart and get free shipping!
              </p>
              <div className="w-full h-2.5 bg-gray-200 overflow-hidden">
                <div
                  className="h-full bg-[#003465] transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 px-4 pb-4"> 
            <Link to="/cart" onClick={onClose} className="w-full text-center text-gray-700 text-[13px] nav-lato font-semibold uppercase bg-[#f7f7f7] transition cursor-pointer py-2.5 rounded-lg">
              View Cart
            </Link>
            <button className="w-full bg-[#003465] text-white text-[13px] nav-lato font-semibold uppercase py-3 hover:bg-[#004a8f] transition cursor-pointer">
              Checkout
            </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
