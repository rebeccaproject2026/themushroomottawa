import { X } from "lucide-react";
import { Icon } from "@iconify/react";

export default function CartDrawer({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
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
          <h2 className="text-lg nav-poppins font-semibold text-gray-800">Shopping cart</h2>
          <button
            onClick={onClose}
            className="flex items-center gap-1 text-sm font-semibold text-gray-800 hover:text-gray-500 transition cursor-pointer"
          >
            <X className="w-4.5 h-4.5" />
            Close
          </button>
        </div>

        {/* Empty State */}
        <div className="flex-1 flex flex-col items-center justify-start pt-10 gap-5 px-4">
          <Icon
            icon="bi:cart-x"
            className="w-20 h-20 text-gray-300"
          />
          <p className="text-[#242424] font-semibold text-sm nav-poppins">No products in the cart.</p>
          <button
            onClick={onClose}
            className="bg-[#003465] text-white text-xs font-semibold uppercase px-4 py-2.5 hover:bg-[#004a8f] transition cursor-pointer"
          >
            Return to Shop
          </button>
        </div>
      </div>
    </>
  );
}
