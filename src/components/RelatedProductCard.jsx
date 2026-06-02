import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { Tooltip } from "react-tooltip";
import { Icon } from "@iconify/react";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";
import QuickViewModal from "./QuickViewModal";

export default function RelatedProductCard({ product }) {
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [cartOverlay, setCartOverlay] = useState(false);
  const [quantity, setQuantity] = useState("");
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const { addToCart, toggleWishlist, isWishlisted } = useCart();
  const wishlisted = isWishlisted(product.id);
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (!quantity) {
      toast.error("Please select an option first.", {
        style: { borderRadius: "6px", background: "#1a1a1a", color: "#fff" },
      });
      return;
    }
    addToCart(product, quantity);
    setCartOverlay(false);
    setQuantity("");
  };

  return (
    <div
      className="relative bg-white border border-gray-100 cursor-pointer transition-all duration-300 shadow hover:shadow-lg overflow-hidden"
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => { setIsCardHovered(false); setIsImageHovered(false); }}
      onClick={() => navigate(`/product/${product.id}`)}
    >
      {/* Image */}
      <div
        className="relative w-full h-70 xs:h-auto xs:aspect-square lg:aspect-auto bg-white flex items-center justify-center lg:h-87.5 overflow-hidden p-4"
        onMouseEnter={() => setIsImageHovered(true)}
        onMouseLeave={() => setIsImageHovered(false)}
      >
        <img
          src={product.image}
          alt={product.name}
          className={`h-full w-auto object-cover transition-all duration-700 absolute ${isImageHovered && product.hoverImage ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
        />
        {product.hoverImage && (
          <img
            src={product.hoverImage}
            alt={product.name}
            className={`h-full w-auto object-cover transition-all duration-700 absolute ${isImageHovered ? "opacity-100 scale-110" : "opacity-0 scale-95"
              }`}
          />
        )}

        {/* Cart overlay */}
        <div
          className={`absolute inset-0 bg-white/85 backdrop-blur-[2px] flex flex-col justify-center items-center gap-3 transition-all duration-300 ease-in-out z-30 ${cartOverlay ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setCartOverlay(false); setIsCardHovered(true); }}
            className="absolute top-2 right-3 flex items-center gap-1 text-sm nav-lato font-semibold text-[#333333] hover:text-gray-400 transition cursor-pointer"
          >
            <X className="w-4.5 h-4.5" /> Close
          </button>
          <p className="text-[15px] font-semibold text-[#333333]">Quantity:</p>
          <div className="relative w-full max-w-3xs">
            <select
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full border-2 border-[#777777]/30 px-3 py-2 text-sm text-gray-500 focus:outline-none appearance-none pr-9 cursor-pointer"
            >
              <option value="">Choose an option</option>
              <option value="7g">7g</option>
              <option value="14g">14g</option>
              <option value="28g">28g</option>
            </select>
            <Icon icon="mdi:chevron-down" className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
          <button
            onClick={handleAddToCart}
            className="absolute bottom-0 w-full bg-[#003465] nav-lato text-white font-bold uppercase text-[13px] py-3 hover:bg-[#01274a] transition cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Action panel */}
      <div
        className={`absolute top-4 right-2 lg:right-3 rounded-2xl lg:rounded-none flex flex-col items-center gap-3 lg:gap-5 shadow-[4px_4px_12px_rgba(0,0,0,0.035)] border-r border-b border-gray-100 px-1.5 lg:px-2.5 py-2 lg:py-3 transition-all duration-300 ease-out z-20 ${cartOverlay
          ? "opacity-0 translate-x-full"
          : isCardHovered
            ? "opacity-100 translate-x-0"
            : "opacity-100 translate-x-0 lg:opacity-0 lg:translate-x-full"
          }`}
        style={{ top: "16px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          data-tooltip-id={`rp-cart-${product.id}`}
          data-tooltip-content="select options"
          data-tooltip-place="left"
          onClick={(e) => { e.stopPropagation(); setCartOverlay(true); setIsCardHovered(false); }}
          className="text-gray-700 hover:text-[#003465] transition cursor-pointer"
        >
          <Icon icon="icons8:shopping-cart" className="w-7 h-7 transform scale-x-[-1]" />
        </button>
        <Tooltip id={`rp-cart-${product.id}`} style={{ backgroundColor: "#1a1a1a", color: "#fff", fontSize: "13px", borderRadius: "4px" }} />

        <button
          data-tooltip-id={`rp-search-${product.id}`}
          data-tooltip-content="Quick view"
          data-tooltip-place="left"
          onClick={(e) => { e.stopPropagation(); setQuickViewOpen(true); }}
          className="text-gray-700 hover:text-[#003465] transition cursor-pointer lg:block hidden"
        >
          <Search className="w-5 h-5" />
        </button>
        <Tooltip id={`rp-search-${product.id}`} style={{ backgroundColor: "#1a1a1a", color: "#fff", fontSize: "13px", borderRadius: "4px" }} />

        <button
          data-tooltip-id={`rp-wish-${product.id}`}
          data-tooltip-content={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          data-tooltip-place="left"
          onClick={(e) => { e.stopPropagation(); toggleWishlist(product); }}
          className="text-gray-700 hover:text-[#003465] transition cursor-pointer relative"
        >
          <Icon
            icon="prime:heart"
            className="w-6.5 h-6.5"
          />
          {wishlisted && (
            <span className="absolute -top-1 -right-1 bg-[#003465] rounded-full w-4 h-4 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
          )}
        </button>
        <Tooltip id={`rp-wish-${product.id}`} style={{ backgroundColor: "#1a1a1a", color: "#fff", fontSize: "13px", borderRadius: "4px" }} />
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-1">
        <h3 className="text-sm font-medium text-[#333333] nav-poppins">{product.name}</h3>
        <p className="text-sm text-[#A5A5A5] nav-lato">{product.category}</p>
        <p className="text-sm font-semibold text-[#003465] mt-1 nav-lato">
          ${product.price.toFixed(2)}{product.maxPrice ? ` – $${product.maxPrice.toFixed(2)}` : ""}
        </p>
      </div>

      {quickViewOpen && (
        <QuickViewModal product={product} onClose={() => setQuickViewOpen(false)} />
      )}
    </div>
  );
}
