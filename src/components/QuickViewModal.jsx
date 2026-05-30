import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Icon } from "@iconify/react";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

export default function QuickViewModal({ product, onClose }) {
  const [quantity, setQuantity] = useState("");
  const [qty, setQty] = useState(1);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDir, setSlideDir] = useState("");
  const [isSliding, setIsSliding] = useState(false);
  const timeoutRef = useRef(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const images = [product.image, ...(product.hoverImage ? [product.hoverImage] : [])];

  const goTo = (nextIndex, dir) => {
    if (isSliding || images.length < 2) return;
    setSlideDir(dir);
    setIsSliding(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveIndex(nextIndex);
      setIsSliding(false);
    }, 280);
  };

  const handlePrev = () => goTo((activeIndex - 1 + images.length) % images.length, "right");
  const handleNext = () => goTo((activeIndex + 1) % images.length, "left");

  const handleAddToCart = () => {
    if (!quantity) {
      toast.error("Please select an option first.", {
        style: { borderRadius: "6px", background: "#1a1a1a", color: "#fff" },
        iconTheme: { primary: "#ff4444", secondary: "#fff" },
      });
      return;
    }
    addToCart(product, quantity, qty);
    onClose();
  };

  const handleViewDetails = () => {
    onClose();
    navigate(`/product/${product.id}`);
  };

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      clearTimeout(timeoutRef.current);
    };
  }, [onClose]);

  const imgStyle = isSliding
    ? {
        transform: slideDir === "left" ? "translateX(-60px)" : "translateX(60px)",
        opacity: 0,
        transition: "transform 0.28s ease-in-out, opacity 0.28s ease-in-out",
      }
    : {
        transform: "translateX(0)",
        opacity: 1,
        transition: "transform 0.28s ease-in-out, opacity 0.28s ease-in-out",
      };

  return createPortal(
    <div
      className="fixed inset-0 z-999 flex items-center justify-center bg-black/50"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative bg-white w-full max-w-237.5 p-7 shadow-2xl overflow-hidden"
        style={{ minHeight: "32rem" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 text-gray-400 hover:text-gray-800 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {/* Image panel */}
          <div
            className="relative flex items-start w-100 justify-center  overflow-hidden"
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
          >
            
              <img
                key={activeIndex}
                src={images[activeIndex]}
                alt={product.name}
                style={{ ...imgStyle, maxHeight: "18.5rem" }}
                className=" aspect-square w-auto object-cover"
              />
            

            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className={`absolute left-3 top-1/2 -translate-y-1/2 p-1.5 text-gray-700 hover:text-[#003465] transition-all duration-300 cursor-pointer ${
                    isImageHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                  }`}
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={handleNext}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-gray-700 hover:text-[#003465] transition-all duration-300 cursor-pointer ${
                    isImageHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
                  }`}
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}

            <button
              onClick={handleViewDetails}
              className={`absolute bottom-0 left-0 right-0 bg-[#003465] text-white font-bold uppercase text-[13px] tracking-widest nav-lato py-3.5 transition-all duration-300 cursor-pointer hover:bg-[#012140] ${
                isImageHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
              }`}
            >
              View Details
            </button>
          </div>

          {/* Product info */}
          <div className="flex flex-col gap-4">
            <h2 className="text-[26px] font-medium text-[#333333] nav-poppins">{product.name}</h2>

            <p className="text-xl font-semibold text-[#003465] nav-lato">
              ${product.price.toFixed(2)}
              {product.maxPrice ? ` – $${product.maxPrice.toFixed(2)}` : ""}
            </p>

            <p className="text-sm nav-lato text-[#777777] max-w-100 leading-relaxed">{product.description}</p>

            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-[#242424] nav-lato">Quantity:</span>
              <div className="relative mb-2">
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-65 border-2 border-[#777777]/30 px-3 py-2 text-sm text-gray-500 focus:outline-none appearance-none pr-8 cursor-pointer"
                >
                  <option value="">Choose an option</option>
                  <option value="7g">7g</option>
                  <option value="14g">14g</option>
                  <option value="28g">28g</option>
                </select>
                <Icon
                  icon="mdi:chevron-down"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center border text-[#777777] border-gray-300">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-1.5 py-2 hover:bg-[#003465] hover:text-white transition cursor-pointer text-lg leading-none">−</button>
                <span className="px-3 py-2 text-sm font-medium  border-x border-gray-300 nav-lato">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} className="px-1.5 py-2 hover:bg-[#003465] hover:text-white transition cursor-pointer text-lg leading-none">+</button>
              </div>
              <button
                onClick={handleAddToCart}
                className="nav-lato px-4 bg-[#003465] text-white font-bold uppercase text-[13px] tracking-wider nav-lato py-2.5 hover:bg-[#012140] transition cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
            

            <div className="border-t border-gray-200 pt-5 flex flex-col gap-3 text-sm text-[#777777] nav-lato">
              <p><span className="font-semibold text-[#333333]">SKU:</span> N/A</p>
              <p>
                <span className="font-semibold text-[#333333]">Category:</span>{" "}
                <span className="hover:underline cursor-pointer">{product.category}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  , document.body);
}
