import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Heart, MoreHorizontal, X } from "lucide-react";
import { Icon } from "@iconify/react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";
import QuickViewModal from "./QuickViewModal";

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [cartOverlay, setCartOverlay] = useState(false);
  const [quantity, setQuantity] = useState("");
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const { addToCart, toggleWishlist, isWishlisted } = useCart();
  const wishlisted = isWishlisted(product.id);
  const navigate = useNavigate();

  const showHoverIcons = isHovered && !cartOverlay;

  const handleAddToCart = () => {
    if (!quantity) {
      toast.error("Please select an option first.", {
        style: { borderRadius: "6px", background: "#1a1a1a", color: "#fff" },
        iconTheme: { primary: "#ff4444", secondary: "#fff" },
      });
      return;
    }
    addToCart(product, quantity);
    setCartOverlay(false);
    setQuantity("");
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsExpanded(false);
  };

  return (
    <>
      <div
        className={`bg-[#f8fafc] rounded-xl transition-all duration-300 group relative border border-gray-100 ${
          isHovered ? "z-30 shadow-[0_4px_20px_rgba(0,0,0,0.12)]" : "z-10 shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="p-4 flex flex-col gap-3">
          {/* Image Container */}
          <div
            className="relative bg-white flex items-center justify-center rounded-lg overflow-hidden h-52"
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <img
              src={product.image}
              alt={product.name}
              className={`h-full w-auto object-contain transition-all duration-700 cursor-pointer absolute ${
                isImageHovered && product.hoverImage ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            />
            {product.hoverImage && (
              <img
                src={product.hoverImage}
                alt={product.name}
                className={`h-full w-auto object-contain transition-all duration-700 cursor-pointer absolute ${
                  isImageHovered ? "opacity-100 scale-110" : "opacity-0 scale-95"
                }`}
              />
            )}

            {/* Cart Overlay */}
            <div
              className={`absolute inset-0 bg-white/85 flex flex-col justify-center gap-3 transition-all duration-300 ease-in-out ${
                cartOverlay ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
              }`}
            >
              <button
                onClick={(e) => { e.stopPropagation(); setCartOverlay(false); }}
                className="absolute top-0 right-1 flex items-center gap-1 text-sm font-semibold text-gray-900 hover:text-gray-400 transition cursor-pointer"
              >
                <X className="w-4.5 h-4.5" /> Close
              </button>
              <p className="text-base font-semibold text-gray-800 text-center">Quantity:</p>
              <div className="relative mx-auto w-[84%]">
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full border-2 border-gray-300/80 px-4 py-2.5 text-sm text-gray-500/70 font-medium focus:outline-none cursor-pointer bg-white appearance-none pr-9"
                >
                  <option value="">Choose an option</option>
                  <option value="14g">14g</option>
                  <option value="28g">28g</option>
                  <option value="7g">7g</option>
                </select>
                <Icon
                  icon="mdi:chevron-down"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                />
              </div>
              <button
                onClick={handleAddToCart}
                className="w-full absolute bottom-0 bg-[#003465] text-white font-semibold nav-lato uppercase text-[13px] py-2.5 rounded-b-xl hover:bg-[#012140] transition cursor-pointer"
              >
                Add to Cart
              </button>
            </div>

            {/* Hover Icons */}
            <div
              className={`absolute top-4 right-4 flex flex-col gap-5 transition-all duration-300 py-2 px-3 rounded-br-lg rounded-tr-lg shadow-[10px_10px_20px_rgba(0,0,0,0.1)] ${
                showHoverIcons ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
              }`}
            >
              <button
                data-tooltip-id={`quickview-${product.id}`}
                data-tooltip-content="Quick view"
                data-tooltip-place="left"
                onClick={(e) => { e.stopPropagation(); setQuickViewOpen(true); }}
                className="rounded-full transition-colors cursor-pointer"
              >
                <Search className="h-5.5 w-5.5 text-gray-900 hover:text-gray-500" strokeWidth={2} />
              </button>
              <Tooltip
                id={`quickview-${product.id}`}
                style={{ backgroundColor: "#1a1a1a", color: "#fff", fontSize: "14px", fontWeight: 500, borderRadius: "4px" }}
              />
              <button
                data-tooltip-id={`wishlist-${product.id}`}
                data-tooltip-content={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
                data-tooltip-place="left"
                onClick={(e) => { e.stopPropagation(); toggleWishlist(product); }}
                className="rounded-full transition-colors cursor-pointer relative"
              >
                <Heart
                  className="h-5.5 w-5.5 transition-colors text-gray-900 hover:text-gray-500"
                  strokeWidth={2}
                />
                {wishlisted && (
                  <span className="absolute -top-1 -right-1 bg-[#003465] rounded-full w-4 h-4 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                )}
              </button>
              <Tooltip
                id={`wishlist-${product.id}`}
                style={{ backgroundColor: "#1a1a1a", color: "#fff", fontSize: "14px", fontWeight: 500, borderRadius: "4px" }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-20">
            <h3 className="text-sm font-medium text-gray-800 mb-1 nav-poppins">{product.name}</h3>
            <p className="text-sm text-[#A5A5A5] nav-lato mb-1">{product.category}</p>
            <p className="text-sm font-medium text-[#003465] mb-2">
              ${product.price.toFixed(2)} {product.maxPrice && `- ${product.maxPrice.toFixed(2)}`}
            </p>

            {/* Select Options Button */}
            <div
              onClick={() => {
                if (!cartOverlay) { setCartOverlay(true); setIsHovered(false); }
              }}
              className={`relative p-5 w-full overflow-hidden group/btn cursor-pointer ${cartOverlay ? "pointer-events-none" : ""}`}
            >
              <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover/btn:-translate-y-full ${cartOverlay ? "bg-gray-400" : "bg-[#003465]"}`}>
                <span className="text-white font-semibold uppercase text-[13px] tracking-wider nav-lato">Select Options</span>
              </div>
              <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out translate-y-full group-hover/btn:translate-y-0 ${cartOverlay ? "bg-gray-400" : "bg-[#003465]"}`}>
                <Icon icon="la:shopping-cart" className="text-white h-7 w-7" />
              </div>
            </div>
          </div>
        </div>

        {/* Description that expands downwards */}
        <div
          className={`absolute left-0 right-0 top-full bg-white px-5 rounded-b-xl transition-all duration-300 overflow-hidden border border-t-0 border-gray-100 ${
            isHovered ? "opacity-100 shadow-[0_15px_20px_rgba(0,0,0,0.1)]" : "opacity-0"
          }`}
          style={{
            marginTop: isHovered ? "-10px" : "0",
            paddingTop: isHovered ? "10px" : "0",
            maxHeight: isHovered ? (isExpanded ? "500px" : "200px") : "0",
            paddingBottom: isHovered ? "20px" : "0",
          }}
        >
          <div className="border-t border-gray-200 mt-1 pt-3 relative">
            <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? "max-h-100" : "max-h-15"}`}>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                {product.description || "Ultra-potent Panaeolus cyanescens in convenient capsules — one of the strongest psychedelic strains, delivering extreme vivid visuals, overwhelming euphoria."}
              </p>
            </div>
            {!isExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-14 bg-linear-to-t from-white via-white/90 to-transparent flex items-end justify-center">
                <button
                  onClick={(e) => { e.preventDefault(); setIsExpanded(true); }}
                  className="text-gray-400 hover:text-gray-800 transition-colors pb-1 cursor-pointer"
                  aria-label="Read more"
                >
                  <MoreHorizontal className="h-6 w-6" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {quickViewOpen && (
        <QuickViewModal product={product} onClose={() => setQuickViewOpen(false)} />
      )}
    </>
  );
}
